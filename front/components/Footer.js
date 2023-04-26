import React from "react";
import { Col, Row, Typography } from 'antd';

const Footer = () => {
  return(
    <>
    <div style={{ margin: '2rem'}}>
      <Typography style={{ textAlign: 'center'}}>Copyright © 2023- Garam Jung. All right reserved.</Typography>
    <Row>
     <Col xs={{ span: 18, offset: 3 }} md={{ span: 16, offset: 8 }} >
     </Col>
     </Row>
     </div>
    </>
  )
}

export default Footer;