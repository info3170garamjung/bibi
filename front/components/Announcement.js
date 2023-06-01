

import React from "react"
import { Typography, Button, Divider } from 'antd';

const Announcement = () => {
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
<Typography style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#606061'}}>Announcement</Typography>
<Button type="text" style={{color: '#bdbfbe'}} ghost >All</Button>
</div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem'}}>
      <Typography style={{ textAlign: 'center', margin: '2rem', color: '#7c7c7d'}}>공지사항 구현하기</Typography>
    </div>
    <Divider />

    </>
  )
}

export default Announcement;