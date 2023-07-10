

import React, { useState, useEffect, useRef } from 'react';
import AppLayout from '../../../components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Image, Typography, Avatar, Button, Input, notification } from 'antd';
import { changeNicknameRequestAction, changeProfileImageAction } from '../../../reducers/user';

const account = () => {
  const { me } = useSelector((state) => state.user || {});
  const dispatch = useDispatch();

  const [inputDisabled, setInputDisabled] = useState(true);
  const [nickname, setNickname] = useState(''); 
  const [selectedImage, setSelectedImage] = useState(null) // 선택한 이미지 파일 상태

  const inputFileRef = useRef(null);

  useEffect(() => {
    if(selectedImage !== null) {
      // 프로필사진이 변경된 후에 알림 메세지 표시
      notification.open({
        message: 'Profile Picture Updated',
        description: 'Your profile picture has been changed.'
      })
    }
  }, [selectedImage]);

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

  const handleAvatarClick = () => {
      inputFileRef.current.click(); // 파일 선택 창 열기
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch(changeProfileImageAction(file));
    setSelectedImage(file);
    // 파일 업로드 로직 구현 및 리덕스 상태 업데이트
  }
  

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
            <div style={{marginTop: '1.1rem', marginBottom: '1.1rem', display: 'flex', alignItems: 'center', justfyContent: 'center'}}>
  <Avatar
  shape="circle"
  size={{ xs: 32, sm: 42, md: 60, lg: 80, xl: 110, xxl: 130 }}
  style={{ 
    backgroundColor: '#000', 
    color: '#fff', 
    cursor: 'pointer', 
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    display: 'flex',
  }}
  onClick={handleAvatarClick}
>
  
  {me.profileImage ? (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      }}>
    <Image
      src={URL.createObjectURL(me.profileImage)}
      alt="Selected"
      style={{ 
        width: '100%', 
      height: '100%', 
      objectFit: 'cover',
      transform: 'scale(2.2)'
    }}
     preview={false}
      />
      </div>
  ) : (
    <>
      {me.nickname[0].toUpperCase()}
    </>
  )}

  </Avatar>

  <input
    type="file"
    accept="image/*"
    style={{ display: 'none' }}
    ref={inputFileRef}
    onChange={handleFileChange}
  />

                  
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
