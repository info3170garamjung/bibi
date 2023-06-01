
import React, { useState, useCallback, useEffect } from 'react';
import { 
  HeartOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../reducers/post';
import FormCategory from './FormCategory';
import PostFormLayout from './PostFormLayout';
import QuillEditor from './QuillEditor';
import { useRouter } from 'next/router';
const PostForm = ({ post }) => {
  const isEditing = useSelector((state) => state.post.isEditing)
  const [content, setContent] = useState('');
  const { addPostDone, editPostDone } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [ text, setText ] = useState('');
  const [category, selectedCategory] = useState(null);
  const router = useRouter();

  console.log('router Redirect PostForm:', router);

  const id = useSelector((state) => state.user.me?.id);
  const nickname = useSelector((state) => state.user.me?.nickname);

  console.log('post가 잘전달되는지확인', post);
  console.log('isEditing이 잘 전달되는지 확인',isEditing);

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

  const handleChangeCategory = useCallback((value) => {
    selectedCategory(value);
  }, []);
  
  useEffect(() => {
    console.log('isEditing Redirect(PostForm):', isEditing);
    console.log('post Redirect(PostForm):', post);

    if (isEditing && post) {
      console.log('Executing logic for editing...');
      console.log('isEditing', isEditing);
      console.log('post', post);
      setText(post.title);
      selectedCategory(post.category);
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
      selectedCategory(null);
    }
  }, [addPostDone, isEditing]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);


  const onSubmit = useCallback(() => {
    if (isEditing) {
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
    } else {
    const data = {
      title: text,
      category,
      content,
      User: {
       // id,
        nickname,
      },
    };

dispatch(addPost(data));
  }
  
console.log(text, category, content);
}, [text, category, content, nickname, isEditing]);

  return (
    <>
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
  );
};

export default PostForm;
