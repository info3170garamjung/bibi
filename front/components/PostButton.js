import React from "react";
import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { showPostFormAction } from "../reducers/post";

const PostButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();


  const handleClick = () => {
    router.push('/')
    .then(() => dispatch(showPostFormAction(true)))
    .catch((error) => console.log(error));
  }
  return (
    <>
     <div>
        <Space direction="vertical">
        <Button type="text" 
        style={{
          fontFamily: 'Bitter', 
          fontSize: '0.9rem', 
          color: '#000', 
          backgroundColor: '#adadad',
          padding: '0 10px' }} 
          onClick={handleClick}>
            Post
        </Button>
        </Space>
     </div>
    </>
  )
}
export default PostButton;
