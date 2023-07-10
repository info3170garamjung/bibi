/*
import React from "react"
import { Typography, Button, Divider, Table } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';

const Announcement = () => {
  const router = useRouter();

  const data = [
    {
      key: '1',
      title: 'Blog Guildline',
      writer: 'DevDiary',
      date: moment('2023-06-04T11:10:00').format('YYYY.MM.DD hh:mm'),
    },
    {
      key: '2',
      title: 'Blog Improvement Plan',
      writer: 'DevDiary',
      date: moment('2023-06-04T12:15:00').format('YYYY.MM.DD hh:mm'),
    }
  ];

   // Table에 사용할 column 정의
   const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'writer',
      key: 'writer',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
  ];

  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#606061'}}>Announcement</Typography>
      <Button style={{color: '#bdbfbe'}} ghost >All</Button>
    </div>
    <div style={{marginTop: '2rem'}}>
      <Table 
        size="small" 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        onRow={(record) => {
        return {
          onClick: () => {
          router.push(`/announcement/${record.key}`);},
          style: { cursor: "pointer"}
          };
        }}
        />
    </div>
    </>
  )
}

export default Announcement;
*/


import React from "react"
import { Typography, Divider, Button } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';
import { formatDate } from "../utils/dateUtils";
import { stripHtmlTags } from "../utils/stripHtmlTags";


const Announcement = () => {
  const router = useRouter();
  const { mainPosts } = useSelector((state) => state.post);

  const filteredPosts = mainPosts.filter((post) => post.category === 'Announce')

  return(
    <>
     <div style={{ display: 'inline-block'}}>
      <Text style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#2487e1cc', padding: '0.5rem'}}>Announcement</Text>
      <Divider style={{backgroundColor: '#2487e187', marginTop: '0.5rem', height: '2px'}} />
      </div>
    <div style={{marginTop: '2rem'}}>
      {filteredPosts.length > 0 ? 
        filteredPosts.map(post => (
          <>
            <div style={{ marginBottom: '3rem'}}>
              <Link href={`/category/${post.category}/${post.id}`}>
              <Text style={{ color: '#3d3d3c', fontSize: '1.7rem', fontWeight: 'bold'}}>{post.title}</Text>
              </Link>
              <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem',marginTop: '0.7rem', color:'#4f4f4e'}}>
                {stripHtmlTags(post.content).length > 150 ? `${stripHtmlTags(post.content).substring(0, 150)}...` : stripHtmlTags(post.content)}
            </div>
            <Text type="secondary" style={{fontSize: '0.9rem'}}>{formatDate(post.createdAt)}</Text>
            </div>
            <Divider />
          </>
        ))
        : <div>No Posts found.</div>}
        </div>  
        </>
  )
    };
      
export default Announcement;