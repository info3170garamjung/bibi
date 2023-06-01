import React, {useState} from 'react';
import AppLayout from '../../../components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, Avatar, Button, Input } from 'antd';
import { changeNicknameRequestAction } from '../../../reducers/user';

const account = () => {
  const { me } = useSelector((state) => state.user);
  //const nickname = useSelector((state) => state.user.me?.nickname)
  const dispatch = useDispatch();
  console.log(me.nickname);

  // Input disable 상태관리용 state
  const [inputDisabled, setInputDisabled] = useState(true);
  const [nickname, setNickname] = useState(me?.nickname); // 변경 가능한 닉네임 상태를 만듬

  const handleEditClick = () => {
    setInputDisabled(false); // Edit 버튼 클릭시 Input 활성화
  };

  const handleConfirmClick = () => {
    setInputDisabled(true); // Confirm 버튼 클릭시 Input 비활성화
    dispatch(changeNicknameRequestAction(nickname)); // Confirm 버튼을 클릭시 새 닉네임을 전송
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value); // Input 필드에서 닉네임 변경 처리
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