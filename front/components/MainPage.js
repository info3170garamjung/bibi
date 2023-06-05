import React from 'react';
import { Typography, Button, Divider } from 'antd';
import Announcement from './Announcement';
const MainPage = () => {
return (
  <>
  <div style={{margin: '5rem'}}>
      <Announcement />
      {/*
      <Typography style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#606061'}}>Recent Posts</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem'}}>
        <Typography style={{ textAlign: 'center', margin: '2rem', color: '#7c7c7d'}}>썸네일 + 싸인까지</Typography>
      </div>
      <Divider />
*/}
      </div>

  </>
)
}

export default MainPage;