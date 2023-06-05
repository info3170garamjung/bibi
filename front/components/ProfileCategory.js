
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
      <Divider />
      <Menu 
      onClick={handleMenuClick} 
     selectedKeys={[isSelectedMenu]}
      mode="vertical">
        <Menu.Item key="home" style={{fontFamily: 'Bitter'}} icon={<RightOutlined />} >
        Home
        </Menu.Item>
        <Menu.Item key="myPost" style={{fontFamily: 'Bitter'}} icon={<RightOutlined />} >
          My Post
        </Menu.Item>
        <Menu.Item key="editProfile" style={{fontFamily: 'Bitter'}} icon={<RightOutlined />} >
        Edit Profile
        </Menu.Item>

      </Menu>
      <Divider />
      </div>
    </>
  );


};


export default ProfileCategory;
