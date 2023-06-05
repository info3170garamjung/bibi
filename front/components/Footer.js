import React from "react";
import { Col, Row, Typography } from 'antd';

const Footer = () => {
  return(
    <>
     <div style={{
       position: 'fixed',  // 고정된 위치에 배치
       bottom: 0,  // 하단에 붙이기
       left: 0,  // 좌측에 붙이기
       right: 0,  // 우측에 붙이기
       height: '2rem',
       backgroundColor: '#343e4f',  // 원하는 배경색으로 변경
       zIndex: 1000,  // 다른 요소 위에 위치하도록 z-index 설정
       boxSizing: 'border-box',  // 패딩과 경계선이 전체 크기에 포함되도록 설정
       display: 'flex',  // flex로 변경
       justifyContent: 'center',  // 가로 중앙 정렬
       alignItems: 'center',  // 세로 중앙 정렬
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