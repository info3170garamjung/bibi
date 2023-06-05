
import React, { useCallback, useState, useEffect } from 'react';
import { Button, Avatar, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { showPostFormAction } from '../reducers/post';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading, logOutDone } = useSelector((state) => state.user); 
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const router = useRouter();

  const onLogOut = useCallback(() => {
    router.push('/');
    dispatch(logoutRequestAction());
    dispatch(showPostFormAction(false));

  }, []);
/*
  useEffect(() => {
    console.log('Running useEffect due to change in me or logOutLoading');
   // if(!me && !logOutLoading) {
      if(logOutDone && !me && !logOutLoading) {

      console.log('Redirecting to root...');
      router.push('/');
    }
  }, [logOutDone, me, logOutLoading]);
*/
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const handleProfile = useCallback(() => {
    dispatch(showPostFormAction(false));
    router.push(`/profile/${me.id}`);
  }, []);


  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <div onClick={toggleMenu} >
            <Avatar shape="square" style={{ backgroundColor: '#000', color: '#fff'}}>{me.nickname[0].toUpperCase()}</Avatar> 
      </div>

      {isMenuOpen && (
        <Card  style={{ background: '#fafafa', position: 'absolute', top: '100%', right: 0, zIndex: 1 }}>
         <div style={{ display: 'flex', alignItems: 'center' }}>
       <Avatar shape="square" size="small" style={{ backgroundColor: '#000', color: '#fff'}}>{me.email[0].toUpperCase()}</Avatar> 
      <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#464747' }}>{me.email}</span> 
       </div>
       <hr style={{ borderTop: '1px solid #f0eded' }} />

       <Button type="text" onClick={handleProfile}>{me.nickname}'s Profile</Button> 
       
        <hr style={{ borderTop: '1px solid #f0eded' }} />
      <Button type="text" onClick={onLogOut} loading={logOutLoading}>Logout from bibi blog</Button>
      </Card>
      )}
  </div>
  );
}
export default UserProfile;
