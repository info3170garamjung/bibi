

import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import { Space, Typography, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';



const CategoryTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

   const filteredPosts = mainPosts.filter((post) => post.category === title);

  const pagination = {
    size: 'small'
  }

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    /*
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
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
  
   /*
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      render: (content) => {
        console.log('content', content); // 콘솔에 text 출력
        return content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : null;
      },
    },
    */
    
  ];

  return (
    <AppLayout>
            <div style={{margin: '1.5rem'}}>
      <Space direction="vertical">
      <Text type="secondary" style={{fontSize: '1rem'}}>{title}</Text>
      </Space>
      <div style={{ marginTop: '2rem' }}>
      {filteredPosts.length > 0 ? <Table dataSource={filteredPosts} pagination={pagination} columns={columns}  /> : <div>No Posts found.</div>}
    </div>
    </div>
    </AppLayout>
  );
};

export default CategoryTitle;




