import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import { Typography, Button, Divider, Card, Avatar } from 'antd';
import React, { useCallback, useState, useEffect } from 'react';

const EditProfile = () => {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);



  
  const userPosts = mainPosts.filter((post) => post.User.id === me.id);
  const userPostsCount = userPosts.length;
  return (
    <AppLayout excludeCategory excludePostButton>
      <div style={{margin: '1.2rem 8rem'}}>
    <Card
      style={{
        marginBottom: '5rem',
      }}
      type="inner"
      title={`${me.nickname}'s Profile`}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
       <Avatar shape="square" 
       style={{ backgroundColor: '#000', color: '#fff'}}>
      {me.nickname[0].toUpperCase()}
      </Avatar>
      <span style={{ marginLeft: '0.7rem' }}>{me.email}</span>
      </div>
      <Divider />
      <Button type="link" style={{color: '#a8a8a8'}} 
      onClick={() => router.push('/profile/setting/account')}>
        Edit My Account
      </Button>
    </Card>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <Typography style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#606061'}}>My Posts</Typography>
  <Typography style={{fontSize: '0.9rem', color: '#606061'}}>
    <Button type="link"  
    onClick={() => router.push('/profile/myposts')}
    disabled={userPostsCount === 0}
    >See All
    </Button>
    </Typography>
</div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Typography style={{ textAlign: 'center', margin: '2rem', color: '#7c7c7d'}}>
          You have <strong>{userPostsCount}</strong> posts.</Typography>
        
      </div>
      <Divider />
      </div>
    </AppLayout>
  )
}

export default EditProfile;