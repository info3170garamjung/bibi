
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {  Typography, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import GlobalStyles from './GlobalStyles';
import { setSelectMenuAction } from '../reducers/post';


const ProfileCategory = () => {
  console.log("Rendering ProfileCategory");
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const isSelectedMenu = useSelector((state) => state.post.selectedMenu);
  console.log("Selected menu:", isSelectedMenu);
  const dispatch = useDispatch(); 
  


useEffect(() => {
  console.log('Router path changed: ', router.asPath);  // Log when router path changes
}, [router.asPath]);



const handleMenuClick = ({ key }) => {
  console.log('Menu item clicked: ', key);  // Log clicked menu item key
  dispatch(setSelectMenuAction(key));
  if (key === 'home') {
    router.push(`/profile/${me.id}`);
    console.log('Setting active key (in handleMenuClick): ', key);  // Log new active key before setting it
  } else if (key === 'myPost') {
    router.push(`/profile/myposts`);
    console.log('Setting active key (in handleMenuClick): ', key);  // Log new active key before setting it
  } else if (key === 'editProfile') {
    router.push(`/profile/setting/account`)
    console.log('Setting active key (in handleMenuClick): ', key);  // Log new active key before setting it
  }
};



  return (
    <>
    <GlobalStyles />
      <div>
      <Typography style={{ color: '#000', fontSize: '1.1rem', fontWeight: 'bold', margin: '1.2rem' }}>
        {me.nickname}
      </Typography>
      <Divider />
      <Menu 
      onClick={handleMenuClick} 
     // defaultSelectedKeys={['home']}
     selectedKeys={[isSelectedMenu]}
      mode="vertical">
        <Menu.Item key="home" icon={<RightOutlined />} >
        Home
        </Menu.Item>
        <Menu.Item key="myPost" icon={<RightOutlined />} >
          My Post
        </Menu.Item>
        <Menu.Item key="editProfile" icon={<RightOutlined />} >
        Edit Profile
        </Menu.Item>

      </Menu>
      <Divider />
      </div>
    </>
  );


};


export default ProfileCategory;
