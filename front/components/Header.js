import React from "react";
import { Col, Row, Image } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const HeaderWrapper = styled.div`
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  const { me } = useSelector(state => state.user);
  return (
    <>
    <HeaderWrapper>
    <Row justify="space-between" gutter={8}  style={{margin: '1rem'}}>
     <Col xs={{ span: 1, offset: 11 }} md={{ span: 19, offset: 0 }} style={{marginBottom: '0.5rem'}} >
        <Image src="/bibi_logo.png" width='50px' alt="logo" />
      </Col>
      <Col xs={{ span: 8, offset: 0 }} md={{ span: 5, offset: 0 }} style={{textAlign: 'center'}} >
     {me ? <UserProfile /> : <LoginForm />}
      </Col>
    </Row>
  {/*  </div> */}
  </HeaderWrapper>
    </>
  )
}

export default Header;