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