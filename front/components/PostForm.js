

import React, { useState, useCallback, useEffect } from 'react';
import { 
  HeartOutlined,
  LeftCircleOutlined 
} from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';
import FormCategory from './FormCategory';
import PostFormLayout from './PostFormLayout';
import QuillEditor from './QuillEditor';
import { useRouter } from 'next/router';

const PostForm = () => {

  const [content, setContent] = useState('');
  const { addPostDone } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [ text, setText ] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

  const handleChangeCategory = useCallback((value) => {
    setCategory(value);
  }, []);
  
  useEffect(() => {
    if (addPostDone) {
      setText('');
      setContent('');
      setCategory('');
    }
  }, [addPostDone]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);


  const onSubmit = useCallback(() => {
    dispatch(addPost( {title: text, category, content }));
    console.log(text, category, content);
  }, [text, category, content]);


  return (
    <>
          <PostFormLayout onSubmit={onSubmit}>
            <div align="end">
          <Space direction="horizon" style={{marginTop: '1rem', marginBottom: '1rem'}}   >
          <Button type="text" icon={<HeartOutlined />} style={{color: '#84a6f5', fontWeight: 500}} htmlType="submit">Share</Button>
          <Button type="text" onClick={handleGoBack} icon={<LeftCircleOutlined />} style={{color: '#84a6f5'}}></Button>
          </Space>
          </div>

          <Form.Item label="Catalogy">
          <FormCategory handleChangeCategory={handleChangeCategory} />
        </Form.Item>


          <Form.Item label="Title">
          <Input 
          value={text} 
          onChange={onChangeText} 
          placeholder='Enter the header' 
          />
        </Form.Item>

        <Form.Item label="Content">
          <QuillEditor 
          value={content} 
          onChange={handleContentChange} 
          /> 
        </Form.Item>

        </PostFormLayout>


    </>
  );
};

export default PostForm;

