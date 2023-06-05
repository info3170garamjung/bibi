import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmailRequestAction } from "../reducers/user";
import { Input, Button, Typography, Alert } from 'antd';

const EmailVerification = ({ email, onChangeEmail }) => {
  const dispatch = useDispatch();
  const { verifyEmailLoading, verifyEmailDone, verifyEmailError } = useSelector((state) => state.user);

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
  }

  const onVerifyEmail = useCallback(() => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    dispatch(verifyEmailRequestAction(email));
  }, [email, dispatch]);

  return (
      <div style={{marginBottom: '0.8rem'}}>
        {verifyEmailDone && !verifyEmailError && <Alert message="The email is available." type="success" />}
        {verifyEmailDone && verifyEmailError && <Alert message={verifyEmailError} type="error" />}
        <label htmlFor="user-email"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Email</Typography></label>
        <div style={{ display: 'flex', justifyContent: 'center'}}>    

        <Input style={{borderWidth: '2px' }} name="user-email" type="email" value={email} required onChange={onChangeEmail} disabled={verifyEmailDone && !verifyEmailError} />
        <Button onClick={onVerifyEmail} loading={verifyEmailLoading} 
        style={{marginLeft: '0.3rem'}} disabled={verifyEmailDone && !verifyEmailError}>Confirm</Button>
        </div>
      </div>
  );
};

export default EmailVerification;