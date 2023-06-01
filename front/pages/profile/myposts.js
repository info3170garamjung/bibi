import React from "react";
import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Space, Typography, Table } from 'antd';

const { Text } = Typography;

const myPosts = () => {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  const allMyPosts = mainPosts.filter((post) => post.User.id === me.id);

  const pagination = {
    size: 'small'
  }

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => {
        return <Link href={`/category/${record.category}/${record.id}`}>{text}</Link>;
      },
    },
    {
      title: 'Nickname',
      dataIndex: ['User', 'nickname'],
      key: 'nickname',
    },
  ];

  return(
    <>
        <AppLayout excludeCategory excludePostButton>
           <div style={{margin: '1.5rem'}}>
        <Space direction="vertical">
          <Text type="secondary" style={{fontSize: '1rem'}}>My Posts</Text>
        </Space>
        <div style={{ marginTop: '2rem' }}>
          {allMyPosts.length > 0 ? 
            <Table dataSource={allMyPosts} pagination={pagination} columns={columns}  /> 
            : <div>No Posts found.</div>}
        </div>
      </div>
        </AppLayout>
    </>
  )
}
export default myPosts;