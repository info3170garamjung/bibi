import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { Space, Typography, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';
import { formatDate } from '../../utils/dateUtils';

const CategoryTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

   const filteredPosts = mainPosts.filter((post) => post.category === title);
/*
   const formatDate = (createdAt) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const diffTime = Math.abs(now - createdAtDate);
    const diffDays = Math.ceil(diffTime / (1000*60*60*24));
    const diffHours = Math.floor(diffTime / (1000*60*60));
    const diffMinutes = Math.floor(diffTime / (1000*60));

    if (diffMinutes < 1) {
      return 'Just now'
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} minute${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 10) {
      return `${diffDays} minute${diffDays > 1 ? 's' : '' }`
    }
   }
   */
  const pagination = {
    size: 'small', 
    pageSize: 5,
  }

  const columns = [
    /*
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    */
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
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAtValue) => {
      //  const date = new Date(createdAtValue);
      //  console.log('createdAt', createdAtValue);
      //  return date.toISOString().split('T')[0];
      return formatDate(createdAtValue);
      },
    },
  ];

  return (
    <AppLayout>
            <div style={{margin: '1.5rem'}}>
      <Space direction="vertical">
      <Text type="secondary" style={{fontSize: '1rem'}}>{title}</Text>
      </Space>
      <div style={{ marginTop: '2rem' }}>
      {filteredPosts.length > 0 ? 
      <Table 
      dataSource={filteredPosts} 
      pagination={filteredPosts.length > 5 ? pagination : false} 
      columns={columns}  /> 
      : <div>No Posts found.</div>}
    </div>
    </div>
    </AppLayout>
  );
};

export default CategoryTitle;




