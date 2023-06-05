

import React, {useState, useCallback, useEffect} from "react";
import { Form, Modal, Input, Card, Checkbox, Divider, Button, Typography, Alert } from 'antd';
import useInput from './hooks/useInput';
import Footer from '../components/Footer';
import Link from "next/link";
import { 
  KeyOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { SIGN_UP_REQUEST, SIGN_UP_RESET } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import EmailVerification from '../components/EmailVerification';
import { notification } from 'antd';

const checkPassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isLongEnough = password.length >= 8;
  return hasUpperCase && hasNumber && isLongEnough;
};



const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, onChangeEmail ] = useInput('');
  const [ nickname, onChangeNickname ] = useInput('');

  const [ password, onChangePassword ] = useInput('');
  const [ passwordWarning, setPasswordWarning ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  const [ passwordCheck, setPasswordCheck ] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { signUpLoading, signUpData, signUpDone } = useSelector((state) => state.user);

  const {  verifyEmailDone, verifyEmailError } = useSelector((state) => state.user);

  /*
  useEffect(() => {
    if (signUpDone) {
      router.push('/');
      dispatch({ type: SIGN_UP_RESET })
    }
  }, [signUpDone, dispatch, router]);
*/

useEffect(() => {
  if (signUpDone) {
    notification.success({
      message: 'Registration Completed',
      description: 'You have successfully registered',
    });
    dispatch({ type: SIGN_UP_RESET });
    router.push('/');
  }
}, [signUpDone, dispatch, router]);

  useEffect(() => {
    if (password) {
    if(!checkPassword(password)) {
      setPasswordWarning("Password must contain at least one uppercase letter, number and at least 8 characters long.");
    } else {
      setPasswordWarning(''); // 요구사항을 충족하면 경고 메세지를 삭제
    }
  } else {
    setPasswordWarning(''); // 비밀번호가 공백이라면 경고 메세지를 삭제
  }
  }, [password]);

  useEffect(() => {
    console.log('signUpData', signUpData);
  }, [signUpData]);



  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState(false);
  
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  

  const onSubmit = useCallback(() => {
    if (verifyEmailError) {
      console.log('현재 이것이 작동');
      alert(verifyEmailError);
      return;
    }

    if (!verifyEmailDone && !verifyEmailError) {
      alert("Please confirm your email address");
      return;
    }

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        nickname,
      },
    });
    
  }, [email, password, passwordCheck, term, verifyEmailError]);



  const handleSignInClick = () => {
    router.push('/signin');
  }

  return (
    <>
    <div style={{textAlign: 'center'}}>
    <Link href='/'><Button  type="link" style={{ color: '#526687', padding: 0, fontFamily: 'Candal', fontSize: '1.5rem'}}> 
        DevDiary
        </Button></Link>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
    <Card title="Create account" style={{width: 450}}>
    <Form onFinish={onSubmit} style={{maxWidth: 400}}>
    <EmailVerification email={email} onChangeEmail={onChangeEmail} />
      <div style={{marginBottom: '0.8rem'}}>
        <label htmlFor="user-nick" ><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Nickname</Typography></label>
        <Input style={{borderWidth: '2px' }} name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
      <div style={{marginBottom: '0.8rem'}}>
        <label htmlFor="user-password"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Password</Typography></label>
        <Input style={{borderWidth: '2px' }} name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      {passwordWarning && <Alert message={passwordWarning} type="error"></Alert>}

      <div style={{marginBottom: '0.9rem'}}>
        <label htmlFor="user-password-check"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Confirm Password</Typography></label>
        <Input 
        name="user-password-check" 
        type="password" 
        value={passwordCheck} 
        style={{borderWidth: '2px' }}
        required 
        onChange={onChangePasswordCheck} />
         {passwordError && <Typography style={{ color: '#d9686e', fontSize: '0.8rem', marginTop: '0.2rem', fontWeight: 500 }}><KeyOutlined /> Password does not match.</Typography>}
      </div>
      <div style={{ display: 'flex'}}>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm} style={{fontSize: '0.8rem', fontWeight: 500}}>By creating an account, you agree to BiBi's <Button type='link' style={{ fontWeight: 500, fontSize: '0.8rem', padding: 0 }} onClick={showModal}>Conditions of Use</Button>.</Checkbox>
          
          <Modal title="Conditions of Use" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>By creating an account, you agree to BiBi's Conditions of Use.</p>
      </Modal>

          {termError && <Typography style={{ color: '#d9686e', fontSize: '0.8rem', marginTop: '0.2rem', fontWeight: 500 }}><ExclamationCircleOutlined /> You must agree with BiBi's Conditions.</Typography>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit"  loading={signUpLoading} style={{ width: '100%', backgroundColor: '#343e4f', color: '#e4e6eb', boxShadow: 'none', letterSpacing: '0.05em'}} >Join In</Button>
        </div>
        <div style={{ marginTop: 10 }}>
        <Link href='/'><Button type="primary" style={{width: '100%', backgroundColor: '#e6e6e6', color: '#616263', boxShadow: 'none', letterSpacing: '0.05em'}} >Cancel</Button></Link>
        </div>

        <Divider />
        <Typography style={{fontWeight: 500, fontSize: '0.9rem'}}>Already have an account? 
        <span onClick={handleSignInClick} style={{ cursor: 'pointer', color: '#5683ba', marginLeft: '0.5rem'}}>Sign in</span>
        </Typography>
    </Form>
    </Card>
    </div>
    <Footer />
    </>
  )
}

export default Signup;