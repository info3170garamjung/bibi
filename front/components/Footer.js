import React from "react";
import { Col, Row, Typography } from 'antd';

const Footer = () => {
  return(
    <>
     <div style={{
       position: 'fixed', 
       bottom: 0, 
       left: 0,  
       right: 0, 
       height: '2rem',
       backgroundColor: '#343e4f', 
       zIndex: 1000, 
       boxSizing: 'border-box', 
       display: 'flex',  
       justifyContent: 'center', 
       alignItems: 'center', 
    }}>
    
      <Typography style={{ textAlign: 'center', color: '#d3d7de', fontFamily: 'Bitter', fontSize: '0.8rem'}}>Copyright © 2023- Garam. All right reserved.</Typography>
      <Row>
      <Col xs={{ span: 18, offset: 3 }} md={{ span: 16, offset: 8 }} >
      </Col>
      </Row>
    </div>
    </>
  )
}

export default Footer;