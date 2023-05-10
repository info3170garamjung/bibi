import React, {useState, useCallback} from "react";
import { Form, Modal, Input, Card, Image, Checkbox, Divider, Button, Typography } from 'antd';
import useInput from './hooks/useInput';
import Footer from '../components/Footer';
import Link from "next/link";
import { 
  KeyOutlined,
  ExclamationCircleOutlined,
  GoogleSquareFilled
} from '@ant-design/icons';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';


const Signup = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail ] = useInput('');
  const [ nickname, onChangeNickname ] = useInput('');
  const [ password, onChangePassword ] = useInput('');
  const [ passwordError, setPasswordError ] = useState(false);
  const [ passwordCheck, setPasswordCheck ] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { signUpLoading } = useSelector((state) => state.user);

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
    
  }, [email, password, passwordCheck, term]);

  return (
    <>
    <div style={{textAlign: 'center'}}><Image src="/bibi_logo.png" width='50px' alt="logo" /></div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.2rem' }}>
    <Card title="Create account" style={{width: 450}}>
    <Form onFinish={onSubmit} style={{maxWidth: 400}}>
      <div style={{marginBottom: '0.8rem'}}>
        <label htmlFor="user-email"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Email</Typography></label>
        <Input style={{borderWidth: '2px' }} name="user-email" type="email" value={email} required onChange={onChangeEmail} />
      </div>
      <div style={{marginBottom: '0.8rem'}}>
        <label htmlFor="user-nick" ><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Nickname</Typography></label>
        <Input style={{borderWidth: '2px' }} name="user-nick" value={nickname} required onChange={onChangeNickname} />
      </div>
      <div style={{marginBottom: '0.8rem'}}>
        <label htmlFor="user-password"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Password</Typography></label>
        <Input style={{borderWidth: '2px' }} name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      <div style={{marginBottom: '0.9rem'}}>
        <label htmlFor="user-password-check"><Typography style={{ fontSize: '0.8rem', marginBottom: '0.3rem', fontWeight: 500}}>Password again</Typography></label>
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
          <Button type="primary" htmlType="submit"  loading={signUpLoading} style={{ width: '100%', backgroundColor: '#f5e264', color: '#3348a3', boxShadow: 'none', letterSpacing: '0.05em'}} >Join In</Button>
        </div>
        <div style={{ marginTop: 10 }}>
        <Link href='/'><Button type="primary" style={{width: '100%', backgroundColor: '#e6e6e6', color: '#616263', boxShadow: 'none', letterSpacing: '0.05em'}} >Cancel</Button></Link>
        </div>

        <Divider />
        <Typography style={{fontWeight: 500, fontSize: '0.9rem'}}>Already have an account? <Link href='/signIn'>Sign in</Link></Typography>
        <Divider />
        <div style={{textAlign: 'center'}}>
          <GoogleSquareFilled style={{fontSize: '2rem'}}/>
        <Typography style={{ fontSize: '0.8rem', marginTop: '0.3rem', color: '#6d6d6e' }}>Sign Up with Google</Typography>
        </div>

    </Form>
    </Card>
    </div>
    <Footer />
    </>
  )
}

export default Signup;