

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
          <Space direction="vertical">
          <Button style={{fontWeight: 500, backgroundColor: '#d5d8f6', border:'none', fontSize: '0.8rem', color:'#7d88fa', marginBottom: '1.2rem'}} onClick={handleClick}>New Post</Button>
          </Space>
        </div>

    </>
  )
}
export default PostButton;
