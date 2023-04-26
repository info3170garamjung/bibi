import React from 'react';
import { Col, Row } from 'antd';
import Category from './Category';
import Header from './Header';
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <>
    <Header />
    <Row gutter={10}>
      <Col xs={24} md={4}><Category /></Col>
      <Col xs={24} md={20}>{children}</Col>
    </Row>
     <Footer />
    </>
  );
}

export default AppLayout;
