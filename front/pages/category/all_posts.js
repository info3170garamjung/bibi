
/*
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { Space, Typography, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';
import { formatDate } from '../../utils/dateUtils';

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
        return formatDate(createdAtValue);
      },
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
*/

import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { Divider, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';
//import { formatDate } from '../../utils/dateUtils';
import { stripHtmlTags } from '../../utils/stripHtmlTags';


const formatDate = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const diffTime = Math.abs(now - createdAtDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffMinutes < 1) {
    return 'Just now'
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays < 10) {
    return `${diffDays} day${diffDay > 1 ? 's': ''} ago`;
  } else {
    return createdAtDate.toISOString().split('T')[0];
  }
};

const AllPosts = () => {
  const router = useRouter();
  const { title } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <div style={{margin: '1.5rem'}}>
        <Text type="secondary" style={{fontSize: '1rem'}}>All Posts</Text>
        <div style={{ marginTop: '3rem' }}>
        {mainPosts.length > 0 ? 
          mainPosts.map(post => (
            <>
            <div style={{ marginBottom: '3rem'}}>
              <Link href={`/category/${post.category}/${post.id}`}>
                <Text style={{ color: '#3d3d3c', fontSize: '1.7rem', fontWeight: 'bold'}}>{post.title}</Text>
              </Link>
              <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem', marginTop: '0.7rem', color: '#4f4f4e'}}>
                {stripHtmlTags(post.content).length > 150 ? `${stripHtmlTags(post.content).substring(0, 150)}...` : stripHtmlTags(post.content)}
              </div>
              <Text type="secondary" style={{ fontSize: '0.9rem'}}>{formatDate(post.createdAt)}</Text>
            </div>
            <Divider />
            </>
          ))
          : <div>No Posts found.</div>}
        </div>
      </div>
    </AppLayout>
  );
};

export default AllPosts;


