/*
import React, {useState} from 'react';
import AppLayout from '../../../components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, Avatar, Button, Input } from 'antd';
import { changeNicknameRequestAction } from '../../../reducers/user';

const account = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(me.nickname);

  const [inputDisabled, setInputDisabled] = useState(true);
  const [nickname, setNickname] = useState(me?.nickname); 

  const handleEditClick = () => {
    setInputDisabled(false);
  };

  const handleConfirmClick = () => {
    setInputDisabled(true);
    dispatch(changeNicknameRequestAction(nickname)); 
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return(
    <>
      <AppLayout excludeCategory excludePostButton>
        <div style={{margin: '1.2rem'}}>
          <Card>
            <div style={{margin: '3rem'}}>
              <Typography style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Profile Image</Typography>
            <div style={{marginTop: '1.1rem', marginBottom: '1.1rem', display: 'flex', alignItems: 'center'}}>
              <Avatar shape="circle" size="large" style={{ backgroundColor: '#000', color: '#fff'}}>{me.nickname[0].toUpperCase()}</Avatar>
              <Button type="text" style={{ fontSize: '0.8rem'}}>Edit</Button>
            </div>
              <div style={{marginTop: '2rem'}}>
                <Typography style={{marginBottom:'0.5rem', fontSize: '0.9rem', fontWeight: 'bold'}}>Nickname</Typography>
                <div style={{display: 'flex'}}>
                <Input value={nickname} disabled={inputDisabled} onChange={handleNicknameChange} style={{ backgroundColor: '#e9e9e9', border: 'none' }}></Input>
                {inputDisabled ?
                <Button onClick={handleEditClick} style={{marginLeft: '1rem'}}>Edit</Button>
                :
                <Button onClick={handleConfirmClick} style={{marginLeft: '1rem'}}>Confirm</Button>
                }
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AppLayout>
    </>
  )
}

export default account;
*/

import React, { useState, useEffect } from 'react';
import AppLayout from '../../../components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, Avatar, Button, Input } from 'antd';
import { changeNicknameRequestAction } from '../../../reducers/user';

const account = () => {
  const { me } = useSelector((state) => state.user || {});
  const dispatch = useDispatch();

  const [inputDisabled, setInputDisabled] = useState(true);
  const [nickname, setNickname] = useState(''); 

  useEffect(() => {
    setNickname(me?.nickname || 'Guest');
  }, [me]);

  const handleEditClick = () => {
    setInputDisabled(false);
  };

  const handleConfirmClick = () => {
    setInputDisabled(true);
    dispatch(changeNicknameRequestAction(nickname)); 
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  if (!me) {
    return null;  // 아직 사용자 정보가 로드되지 않았거나 에러가 발생했을 경우 렌더링하지 않음
  }

  return(
    <>
      <AppLayout excludeCategory excludePostButton>
        <div style={{margin: '1.2rem'}}>
          <Card>
            <div style={{margin: '3rem'}}>
              <Typography style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Profile Image</Typography>
            <div style={{marginTop: '1.1rem', marginBottom: '1.1rem', display: 'flex', alignItems: 'center'}}>
              <Avatar shape="circle" size="large" style={{ backgroundColor: '#000', color: '#fff'}}>{me.nickname[0].toUpperCase()}</Avatar>
            </div>
              <div style={{marginTop: '2rem'}}>
                <Typography style={{marginBottom:'0.5rem', fontSize: '0.9rem', fontWeight: 'bold'}}>Nickname</Typography>
                <div style={{display: 'flex'}}>
                <Input value={nickname} disabled={inputDisabled} onChange={handleNicknameChange} style={{ backgroundColor: '#e9e9e9', border: 'none' }}></Input>
                {inputDisabled ?
                <Button onClick={handleEditClick} style={{marginLeft: '1rem'}}>Edit</Button>
                :
                <Button onClick={handleConfirmClick} style={{marginLeft: '1rem'}}>Confirm</Button>
                }
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AppLayout>
    </>
  )
}

export default account;
