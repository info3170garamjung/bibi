

import React from "react";
import { Col, Row, Image, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useRouter } from 'next/router';
import { showPostFormAction } from "../reducers/post";

const Header = () => {
  const { me } = useSelector(state => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    router.push('/');
    dispatch(showPostFormAction(false));
  };

  return (
    <>
        <div style={{
       position: 'fixed',  // 고정된 위치에 배치
       top: 0,  // 상단에 붙이기
       left: 0,  // 좌측에 붙이기
       right: 0,  // 우측에 붙이기
       height: 'auto',
       boxShadow: '0px 2px 0px rgba(0,0,0,0.1)',
       backgroundColor: '#343e4f',  // 원하는 배경색으로 변경
       zIndex: 1000,  // 다른 요소 위에 위치하도록 z-index 설정
       boxSizing: 'border-box'  // 패딩과 경계선이 전체 크기에 포함되도록 설정
    }}>
    <Row justify="space-between" gutter={8}  style={{margin: '1rem'}}>
     <Col xs={{ span: 1, offset: 11 }} md={{ span: 19, offset: 0 }} style={{marginBottom: '0.5rem'}} >
     <Button  type="link" onClick={handleLogoClick} style={{ color: '#d3d7de', padding: 0, fontFamily: 'Candal', fontSize: '1.5rem'}}> 
        DevDiary
        </Button>
      </Col>
      <Col xs={{ span: 8, offset: 0 }} md={{ span: 5, offset: 0 }} style={{textAlign: 'center'}} >
     {me ? <UserProfile /> : <LoginForm />}
      </Col>
    </Row>
  </div>
    </>
  )
}

export default Header;
