
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './../../components/PostForm';
import AppLayout from '../../components/AppLayout';
import React, { useEffect } from 'react';

const EditPostPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { postid, title } = router.query;
  const post = useSelector((state) => state.post.mainPosts.find((p) => p.id === postid));
  const isEditing = useSelector((state) => state.post.isEditing)

  console.log('router Redirect edit/[postid]:', router);

useEffect(() => {
  console.log('isEditing Redirect edit/[postid].js:', isEditing);
  if(!isEditing) {
    router.push('/');
  }
}, [isEditing]);




  if(!post) {
    return <div>Invalid postid or post not found.</div>;
  }
  return (
    <>
    <AppLayout >
      
    <h1>Edit Post</h1>
      <PostForm post={post}  />

    </AppLayout>
    </>
  );

}

export default EditPostPage;

/*
import { 
  HeartOutlined,
} from '@ant-design/icons';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import FormCategory from '../../components/FormCategory';
import PostFormLayout from '../../components/PostFormLayout';
import QuillEditor from '../../components/QuillEditor';
import { editPost } from '../../reducers/post';

const EditPostPage = () => {
  const [content, setContent] = useState('');
  const { editPostDone } = useSelector(state => state.post);
  const [text, setText] = useState('');
  const [category, selectedCategory] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { postid, title } = router.query;
  const post = useSelector((state) => state.post.mainPosts.find((p) => p.id === postid));
  const isEditing = useSelector((state) => state.post.isEditing)
  const nickname = useSelector((state) => state.user.me?.nickname);

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

  const handleChangeCategory = useCallback((value) => {
    selectedCategory(value);
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {

    if (post) {
      setText(post.title);
      selectedCategory(post.category);
      setContent(post.content);
    }
    
  }, [post]);


  console.log('router Redirect edit/[postid]:', router);

useEffect(() => {
  console.log('isEditing Redirect edit/[postid].js:', isEditing);
  if(!isEditing) {
    router.push('/');
  }
}, [isEditing]);




  if(!post) {
    return <div>Invalid postid or post not found.</div>;
  }

  const onSubmit = useCallback(() => {
      const updatedPostDate = {
        id: post.id,
        title: text,
        category,
        content,
        User: {
          nickname,
        },
      };

      dispatch(editPost(updatedPostDate))
      console.log(text, category, content);
  
}, [text, category, content, nickname]);

  return (
    <>
    <AppLayout >
    <>
    <h1>Edit Post</h1>
          <div>
          <PostFormLayout onSubmit={onSubmit}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginBottom: '1rem' }}>
            <div>
                <Button type="text" icon={<HeartOutlined />} style={{color: '#84a6f5', fontWeight: 500}} htmlType="submit">Share</Button>
            </div>
          </div>

          <Form.Item label="Catalogy">
          <FormCategory handleChangeCategory={handleChangeCategory} selectedCategory={category} />
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
        </div>

    </>

      

    </AppLayout>
    </>
  );

}

export default EditPostPage;
*/