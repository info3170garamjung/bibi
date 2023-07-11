

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { showPostFormAction, countCategoryPosts } from '../reducers/post';
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
  const { showPostForm, categoryPosts } = useSelector((state) => state.post);
  const router = useRouter();
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(countCategoryPosts());
  }, [dispatch]);

// 먼저 categoryPosts의 모든 값을 합산합니다.
const totalPosts = categoryPosts ? Object.values(categoryPosts).reduce((a, b) => a + b, 0) : 0;


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
                {category.title === "All" ? ` (${totalPosts})` : (categoryPosts && categoryPosts[category.title] ? ` (${categoryPosts[category.title]})` : ' (0)')}
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
