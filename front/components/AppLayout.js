

import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import Category from './Category';
import Header from './Header';
import Footer from "./Footer";
import PostButton from './PostButton';
import PostForm from './PostForm';
import ProfileCategory from './ProfileCategory';
import MainPage from './MainPage';
import { useRouter } from 'next/router';
import GlobalStyles from './GlobalStyles';
import { showPostFormAction } from '../reducers/post';
import { useDispatch, useSelector } from 'react-redux';


const AppLayout = ({ children, excludeCategory = false, excludePostButton = false }) => {
  
  const { me } = useSelector((state) => state.user);
  const { showPostForm, addPostDone, editPostDone } = useSelector(state => state.post);
  const router = useRouter();
  const dispatch = useDispatch();
  const isMainPage = router.pathname === '/';
  const isEditingPage = router.pathname.startsWith('/edit') && router.query.postid;

  console.log('router Redirect AppLayout:', router);
  
  useEffect(() => {
    if(addPostDone || editPostDone) {
      dispatch(showPostFormAction(false));
      console.log('addPostDone, setShowPostForm: ', false)
    }
  }, [addPostDone, editPostDone]);
  




  

  return (
    <>
    <GlobalStyles />
    <Header />
    <Row gutter={10} style={{paddingTop: '4rem'}}>
      <Col xs={24} md={4}> 
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {!excludePostButton && !isEditingPage  && me && !showPostForm && (<PostButton />)}
      </div>
      {!excludeCategory && <Category/>}
      {excludeCategory && <ProfileCategory />}
      </Col>
      <Col xs={24} md={20}>
        {!showPostForm && children}
        {showPostForm &&  <PostForm  />} 
        {isMainPage && !showPostForm && <MainPage />}
      </Col>
    </Row>
    <Footer />
    </>
  );
}

export default AppLayout;




