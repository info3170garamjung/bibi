import React from "react";
import { Button, Space } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
         <Space direction="horizontal">
        <Link href="/signin"><Button type="text" style={{  fontFamily: 'Candal', fontSize: '0.9rem', color: '#fff', borderColor: '#fff',  padding: '0 10px' }} >Sign In</Button></Link>
        <Link href="/signup"><Button type="text" style={{  fontFamily: 'Candal', fontSize: '0.9rem', color: '#fff', borderColor: '#fff',  padding: '0 10px' }}>Sign Up</Button></Link>
        </Space>

    </>
  )
}

export default LoginForm;