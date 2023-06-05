import React, { useCallback, useEffect } from "react";
import { Form, Input, Card, Divider, Button, Typography } from 'antd';
import useInput from './hooks/useInput';
import Footer from '../components/Footer';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import { useRouter } from 'next/router';

const Signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logInLoading, logInError, logInDone } = useSelector((state) => state.user);

  const [email, onChangeEmail ] = useInput('');
  const [ password, onChangePassword ] = useInput('');

  useEffect(() => {
    if (logInDone) {
      router.push('/');
    }
  }, [router, logInDone]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction(
      {email, password}
    ));
  }, [email, password])


  return (
    <>
    <div style={{textAlign: 'center'}}>
    <Link href='/'><Button  type="link" style={{ color: '#526687', padding: 0, fontFamily: 'Candal', fontSize: '1.5rem'}}> 
        DevDiary
        </Button></Link>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}> 
      <Card title="Sign in" style={{width: 450}}> 
        <Form onFinish={onSubmitForm} style={{maxWidth: 400}}>
        <div style={{marginBottom: '0.8rem'}}>
          <label htmlFor="user-email"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Email</Typography></label>
          <Input style={{borderWidth: '2px' }} name="user-email" type="email" value={email} onChange={onChangeEmail}  required/>
        </div>
        <div style={{marginBottom: '0.8rem'}}>
          <label htmlFor="user-password"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Password</Typography></label>
          <Input style={{borderWidth: '2px' }} name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
          <div style={{ marginTop: 30 }}>
          <Button type="primary" htmlType="submit" loading={logInLoading} style={{ width: '100%', backgroundColor: '#343e4f', color: '#e4e6eb', boxShadow: 'none', letterSpacing: '0.05em'}} >Sign In</Button>
        </div>
        <div style={{ marginTop: 10 }}>
          <Link href='/'><Button type="primary" style={{width: '100%', backgroundColor: '#e6e6e6', color: '#616263', boxShadow: 'none', letterSpacing: '0.05em'}} >Cancel</Button></Link>
        </div>   
        </Form>
      </Card> 
    </div> 
    <Footer />
    </>
  )
}

export default Signin;