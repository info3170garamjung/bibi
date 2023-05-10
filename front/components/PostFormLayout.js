import React from 'react';
import { Form } from 'antd';

const PostFormLayout = ({ children, onSubmit }) => {
  return (
    <Form
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 21,
      }}
      layout="horizontal"
      style={{
        maxWidth: '100%',
      }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      {children}
    </Form>
  );
};

export default PostFormLayout;