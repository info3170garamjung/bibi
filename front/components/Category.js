
import React, {useState} from "react";
import { 
  CoffeeOutlined, 
  CrownOutlined ,  
  FolderOpenOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';
const { SubMenu } = Menu;


const Category = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };


  return (
    <>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<CrownOutlined />} title="My Work">
          <Menu.Item key="1">Portfolio</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FolderOpenOutlined />} title="Category">
          <Menu.Item key="2">View All</Menu.Item>
          <SubMenu key="sub3" title="Study">
            <Menu.Item key="3">JavaScript</Menu.Item>
            <Menu.Item key="4">TypeScript</Menu.Item>
            <Menu.Item key="5">React</Menu.Item>
            <Menu.Item key="6">NodeJS</Menu.Item>
            <Menu.Item key="7">GIT</Menu.Item>
            <Menu.Item key="8">Cloud</Menu.Item>
            <Menu.Item key="9">Leetcode</Menu.Item>
            <Menu.Item key="10">Database</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Divider />
        <SubMenu key="sub4" icon={<CoffeeOutlined />} title="Daily Life">
          <Menu.Item key="11">Restaurant Review</Menu.Item>
          <Menu.Item key="12">Daily Record</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default Category;
