
import React, { useState, useEffect } from 'react';
import { Col, Row, Space } from 'antd';
import Category from './Category';
import Header from './Header';
import Footer from "./Footer";
import PostButton from './PostButton';
import { useSelector } from 'react-redux';
import PostForm from './PostForm';

const AppLayout = ({ children }) => {
  
  const { me } = useSelector((state) => state.user);
  const [showPostForm, setShowPostForm] = useState(false);
  const { addPostDone } = useSelector(state => state.post);

  useEffect(() => {
    if(addPostDone) {
      setShowPostForm(false);
    }
  }, [addPostDone]);

  const handleClick = () => {
    setShowPostForm(true);
  }


  return (
    <>
    <Header />
    <Row gutter={10}>
      <Col xs={24} md={4}> 
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      {me && !showPostForm && (<PostButton onClick={handleClick} />)}
      </div>

      <Category/>
      </Col>
      <Col xs={24} md={20}>
        {!showPostForm && children}
        {showPostForm && <PostForm  />} 
      </Col>
    </Row>
    </>
  );
}

export default AppLayout;

