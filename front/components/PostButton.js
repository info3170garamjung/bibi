
import React from "react";
import { Button, Space } from 'antd';
import { 
  FormOutlined
} from '@ant-design/icons';

const PostButton = ({ onClick }) => {
  const buttonStyle = {
    textAlign: 'center',
    margin: '0.5rem 0'
  };

  return (
    <>
        <div style={buttonStyle}>
          <Space direction="vertical">
          <Button   icon={<FormOutlined style={{fontSize: '0.8rem'}}/> } onClick={onClick} ></Button>
          </Space>
        </div>

    </>
  )
}
export default PostButton;
