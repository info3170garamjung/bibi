import React from "react";
import { Button, Space } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
         <Space direction="horizontal">
        <Link href="/signin"><Button type="text" >Sign In</Button></Link>
        <Link href="/signup"><Button type="text" >Sign Up</Button></Link>
        </Space>

    </>
  )
}

export default LoginForm;