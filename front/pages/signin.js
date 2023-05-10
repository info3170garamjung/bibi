import React, { useCallback} from "react";
import { Form, Input, Card, Image, Divider, Button, Typography } from 'antd';
import useInput from './hooks/useInput';
import Footer from '../components/Footer';
import Link from "next/link";
import { 
  GoogleSquareFilled
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const Signin = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail ] = useInput('');
  const [ password, onChangePassword ] = useInput('');
  
  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction(
      {email, password}
    ));
  }, [email, password])

  return (
    <>
    <div style={{textAlign: 'center'}}><Image src="/bibi_logo.png" width='50px' alt="logo" /></div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.2rem' }}> 
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
        <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit" loading={logInLoading} style={{ width: '100%', backgroundColor: '#f5e264', color: '#3348a3', boxShadow: 'none', letterSpacing: '0.05em'}} >Sign In</Button>
        </div>
        <div style={{ marginTop: 10 }}>
        <Link href='/'><Button type="primary" style={{width: '100%', backgroundColor: '#e6e6e6', color: '#616263', boxShadow: 'none', letterSpacing: '0.05em'}} >Cancel</Button></Link>
        </div>

        <Divider />
        <Typography style={{fontWeight: 500, fontSize: '0.9rem'}}> <Link href='/'>Forgot Password</Link></Typography>
        <Divider />
        <div style={{textAlign: 'center'}}>
          <GoogleSquareFilled style={{fontSize: '2rem'}}/>
        <Typography style={{ fontSize: '0.8rem', marginTop: '0.3rem', color: '#6d6d6e' }}>Sign In with Google</Typography>
        </div>

    </Form>
   </Card> 
    </div> 
    <Footer />
    </>
  )
}

export default Signin;