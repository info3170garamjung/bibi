

import React, { useState, useCallback, useEffect } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../reducers/post';
import FormCategory from './FormCategory';
import PostFormLayout from './PostFormLayout';
import { useRouter } from 'next/router';
import GlobalStyles from './GlobalStyles';
const { TextArea } = Input;

const PostForm = ({ post }) => {
  const isEditing = useSelector((state) => state.post.isEditing);
  const [content, setContent] = useState('');
  const { addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [category, setCategory] = useState(null);
  const router = useRouter();

  console.log('router Redirect PostForm:', router);

  const id = useSelector((state) => state.user.me?.id);
  const nickname = useSelector((state) => state.user.me?.nickname);

  console.log('post', post);
  console.log('isEditing', isEditing);

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);


  const handleChangeCategory = useCallback((value) => {
    setCategory(value);
  }, []);

  useEffect(() => {
    console.log('isEditing Redirect(PostForm):', isEditing);
    console.log('post Redirect(PostForm):', post);

    if (isEditing && post) {
      console.log('Executing logic for editing...');
      console.log('isEditing', isEditing);
      console.log('post', post);
      setText(post.title);
      setCategory(post.category);
      setContent(post.content);
      console.log('post.title', post.title);
      console.log('post.category', post.category);
      console.log('post.content', post.content);
    }
  }, [isEditing, post]);

  useEffect(() => {
    if (addPostDone && !isEditing) {
      setText('');
      setContent('');
      setCategory(null);
    }
  }, [addPostDone, isEditing]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (isEditing) {
      const updatedPostData = {
        id: post.id,
        title: text,
        category,
        content,
        User: {
          nickname,
        },
      };

      dispatch(editPost(updatedPostData));
    } else {
      const data = {
        title: text,
        category,
        content,
        User: {
          nickname,
        },
      };

      dispatch(addPost(data));
    }

    console.log(text, category, content);
  }, [text, category, content, nickname, isEditing]);

  return (
    <>
      <GlobalStyles />
      <div>
        <PostFormLayout onSubmit={onSubmit}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div>
              <Button
                type="text"
                icon={<HeartOutlined />}
                style={{ color: '#84a6f5', fontWeight: 500 }}
                htmlType="submit"
              >
                Share
              </Button>
            </div>
          </div>

          <Form.Item label="Category">
            <FormCategory
              handleChangeCategory={handleChangeCategory}
              selectedCategory={category}
            />
          </Form.Item>

          <Form.Item label="Title">
            <Input value={text} onChange={onChangeText} placeholder="Enter the header" />
          </Form.Item>

          <Form.Item label="Content">
          <TextArea
              value={content}
              onChange={handleContentChange}
              style={{ width: '100%' }}
              autoSize={{ minRows: 12 }}
            />
          </Form.Item>
        </PostFormLayout>
      </div>
    </>
  );
};

export default PostForm;