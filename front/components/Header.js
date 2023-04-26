import React from "react";
import { Col, Button, Row, Image, Space } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <>
    <HeaderWrapper>
     {/* <div style={{ boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)'}}> */}
    <Row justify="space-between" gutter={8}  style={{margin: '1rem'}}>
     <Col xs={{ span: 1, offset: 11 }} md={{ span: 19, offset: 0 }} >
        <Image src="/bibi_logo.png" width='50px' alt="logo" />
      </Col>
      <Col xs={{ span: 8, offset: 0 }} md={{ span: 5, offset: 0 }} style={{textAlign: 'center'}} >
        <Space direction="horizontal">
        <Link href="/signin"><Button type="text" >Sign In</Button></Link>
        <Link href="/signup"><Button type="text" >Sign Up</Button></Link>
        </Space>
      </Col>
    </Row>
  {/*  </div> */}
  </HeaderWrapper>
    </>
  )
}

export default Header;