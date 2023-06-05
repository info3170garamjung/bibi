

import React from "react";
import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { showPostFormAction } from "../reducers/post";

const PostButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const buttonStyle = {
    textAlign: 'center',
    margin: '0.5rem 0'
  };



  const handleClick = () => {
    router.push('/')
    .then(() => dispatch(showPostFormAction(true)))
    .catch((error) => console.log(error));
  }
  return (
    <>
        <div style={buttonStyle}>
          <Space direction="vertical" style={{marginTop: '1rem'}}>
          <Button style={{fontWeight: 500, backgroundColor: '#5d708e', border:'none', fontSize: '0.8rem', fontFamily: 'Bitter', color:'#d5d8f6', marginBottom: '1.2rem'}} onClick={handleClick}>New Post</Button>
          </Space>
        </div>

    </>
  )
}
export default PostButton;
