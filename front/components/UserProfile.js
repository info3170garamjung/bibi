import React, {useCallback} from 'react';
import { Button, Avatar, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import Link from 'next/link';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user); 

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Avatar>{me.nickname[0]}</Avatar>
      <Button type="text" onClick={onLogOut} loading={logOutLoading}>Log out</Button>
  </div>
  );
}
export default UserProfile;