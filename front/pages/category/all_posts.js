

import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { Space, Typography, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';

const AllPosts = () => {
  const router = useRouter();
  const { title } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

  const pagination = {
    size: 'small',
    pageSize: 5,
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
        console.log('title', text);
        return <Link href={`/category/${record.category}/${record.id}`}>{text}</Link>;
      },
    },
    
    {
      title: 'Nickname',
      dataIndex: ['User', 'nickname'],
      key: 'nickname',
    },
  ];

  return (
    <AppLayout>
      <div style={{margin: '1.5rem'}}>
        <Space direction="vertical">
        <Text type="secondary" style={{fontSize: '1rem'}}>All Posts</Text>
        </Space>
        <div style={{ marginTop: '2rem' }}>
        {mainPosts.length > 0 ? 
        <Table dataSource={mainPosts} pagination={pagination} columns={columns}  /> 
        : <div>No Posts found.</div>}
        </div>
      </div>
    </AppLayout>
  );
};

export default AllPosts;




