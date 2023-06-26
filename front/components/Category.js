/*
import React, {useState} from "react";
import { 
  RightOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import { useDispatch, useSelector } from "react-redux";
import { showPostFormAction } from "../reducers/post";
import Link from 'next/link';
import { categories } from './categories';
 import GlobalStyles from "./GlobalStyles";
const StyledMenu = styled(Menu)`
  .ant-menu-item-selected {
    font-weight: 500;
    color: #4d4f4e;
    background-color: #f5f5f5;
  }

  .ant-menu-item {
    color: #b7b9bd;
  }
`;

const StyledSubMenu = styled(SubMenu)`
&&& {
  color: #4d4f4e;
  font-family: 'Bitter';
}

&&&.ant-menu-submenu-selected > .ant-menu-submenu-title {
  color: #4d4f4e;
  font-weight: bold;
  background-color: #f5f5f5;
}
`;

const Category = () => {
  const { showPostForm } = useSelector(state => state.post);
  const router = useRouter();
  const dispatch = useDispatch();

const handleCategoryClick = (category) => {
  if (category.title === 'All') {
    router.push('/category/all_posts'); // replace with actual path
  } else {
    router.push(`/category/${category.title}`);
  }
  if (showPostForm) {
    dispatch(showPostFormAction(false));
  }
};

  const [openKeys, setOpenKeys] = useState(['sub2']); // 기본적으로 sub2가 열려있게 설정
  const handleMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <>
    <GlobalStyles />
    <div className="menu-container">
    <StyledMenu
        openKeys={openKeys} 
        onOpenChange={handleMenuOpenChange} 
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Divider />
        <StyledSubMenu key="sub2" icon={<RightOutlined />} title="My Study"  >
          {categories.map(category => (
            <Menu.Item key={category.key} onClick={() => handleCategoryClick(category)}>
              {category.href ? (
                <Link href={category.href}>{category.title.toLowerCase()}</Link>
              ) : category.title}
            </Menu.Item>
          ))}
        </StyledSubMenu>
        <Menu.Divider />
      </StyledMenu>
      </div>
    </>
  );
};

export default Category;

*/

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { showPostFormAction } from '../reducers/post';
import { categories } from './categories';
import GlobalStyles from './GlobalStyles';
import { Divider } from 'antd';

const MenuContainer = styled.div`
  // menu-container 스타일
`;

const MenuItem = styled.li`
  // menu-item 스타일
  list-style-type: none;
  
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;


const SubmenuTitle = styled.span`
  // submenu-title 스타일
`;

const SubmenuItems = styled.ul`
  // submenu-items 스타일
  list-style-type: none;
  padding-left: 0; 
`;
const MenuList = styled.ul`
  // menu 스타일
  list-style-type: none; // 목록 동그라미 제거
`;

const Category = () => {
  const { showPostForm } = useSelector((state) => state.post);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    if (category.title === 'All') {
      router.push('/category/all_posts'); // replace with actual path
    } else {
      router.push(`/category/${category.title}`);
    }
    if (showPostForm) {
      dispatch(showPostFormAction(false));
    }
  };


  return (
    <>
      <GlobalStyles />
      <MenuContainer className="menu-container">
      <MenuList className="menu">
          <li className="submenu" style={{marginTop: '2.5rem'}}>
            <SubmenuTitle className="submenu-title" style={{ fontFamily: 'Bitter', fontSize: '1.1rem' }}>Tag list</SubmenuTitle>
            <Divider />
            <SubmenuItems className="submenu-items" >
              {categories.map((category) => (
                <MenuItem
                  key={category.key}
                  onClick={() => handleCategoryClick(category)}
                  className="menu-item"
                  isSelected={router.asPath === `/category/${category.title}`}
                  style={{marginBottom: '1rem', fontFamily: 'Bitter'}}
                >
                  {category.href ? (
                    <Link href={category.href}>{category.title.toLowerCase()}</Link>
                  ) : (
                    category.title
                  )}
                </MenuItem>
              ))}
            </SubmenuItems>
          </li>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default Category;
