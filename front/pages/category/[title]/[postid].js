/*
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import { Space, Typography, Divider, Button } from 'antd';
import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
const { Text } = Typography;
import { 
  LeftCircleOutlined ,
  DeleteFilled,
  ScissorOutlined,
} from '@ant-design/icons';
import { REMOVE_POST_REQUEST } from '../../../reducers/post';

const PostDetail = () => {
  const router = useRouter();
  const { title, postid } = router.query;
  const { mainPosts, removePostLoading } = useSelector((state) => state.post);
//  const id = useSelector((state) => state.user.me && state.user.me.id);
const id = useSelector((state) => state.user.me?.id);
  const dispatch = useDispatch();

  //const post = mainPosts.find((p) => p.id === id);
  const post = mainPosts.find((p) => {
    console.log("p.id:", p.id, "id:", postid);
    return p.id === postid;
  });

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, []);

  const goBackButton = useCallback(() => {
    router.push('/')
  }, [router]);


  return (
    <AppLayout>
        <div style={{display: 'flex', justifyContent: 'space-between'}} onClick={goBackButton}>
          <div>
          <Button type="text" icon={<LeftCircleOutlined style={{color: '#c7c7c7'}}/>} style={{color: '#84a6f5'}}></Button>

          </div>
          <div>
          {id && post && post.User && post.User.id === id
          ? (
            <>
          <Button type="text" icon={<ScissorOutlined style={{color: '#9d9ea1'}} />} ></Button>
          <Button type="text" icon={<DeleteFilled loading={removePostLoading} onClick={onRemovePost} style={{color: '#9d9ea1'}} />} ></Button>
          </>
          ) 
          : null
            }
            </div>
        </div>

      <div style={{margin: '1.5rem'}}>
        <Space direction="vertical">
          <Text type="secondary" style={{ fontSize: '1rem' }}>
            {title}
          </Text>
          <Text style={{ fontSize: '1.3rem', color: '#666d78'}}>{post?.title}</Text> 
        </Space>
        <Divider />
        <div style={{ marginTop: '2rem' }}>
          {post?.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div>No Post found.</div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default PostDetail;
*/

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AppLayout from '../../../components/AppLayout';
import { Space, Typography, Divider, Button } from 'antd';
import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
const { Text } = Typography;
import { 
  LeftCircleOutlined ,
  DeleteFilled,
  ScissorOutlined,
} from '@ant-design/icons';
import { 
  REMOVE_POST_REQUEST,
  SET_EDITING_STATUS,
} from '../../../reducers/post';
import PostForm from '../../../components/PostForm';

const PostDetail = () => {
  const router = useRouter();
  const { title, postid } = router.query;
  const { mainPosts, removePostLoading } = useSelector((state) => state.post);
//  const id = useSelector((state) => state.user.me && state.user.me.id);
  //const isEditing = useSelector((state) => state.post.isEditing)

const id = useSelector((state) => state.user.me?.id);
  const dispatch = useDispatch();

  const post = mainPosts.find((p) => {
    console.log("p.id:", p.id, "id:", postid);
    return p.id === postid;
  });

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, []);

  const goBackButton = useCallback(() => {
    router.push('/')
  }, [router]);

  const onEditPost = useCallback(() => {
    dispatch({
      type: SET_EDITING_STATUS,
      data: true,
    })
   router.push(`/edit/${postid}`);
  }, [])


  return (
    <AppLayout>
        <div style={{display: 'flex', justifyContent: 'space-between'}} onClick={goBackButton}>
          <div>
          <Button type="text" icon={<LeftCircleOutlined style={{color: '#c7c7c7'}}/>} style={{color: '#84a6f5'}}></Button>

          </div>
          <div>
          {id && post && post.User && post.User.id === id
          ? (
            <>
          <Button type="text" icon={<ScissorOutlined onClick={onEditPost} style={{color: '#9d9ea1'}} />} ></Button>
          <Button type="text" icon={<DeleteFilled loading={removePostLoading} onClick={onRemovePost} style={{color: '#9d9ea1'}} />} ></Button>
          </>
          ) 
          : null
            }
            </div>
        </div>

      <div style={{margin: '1.5rem'}}>
        <Space direction="vertical">
          <Text type="secondary" style={{ fontSize: '1rem' }}>
            {title}
          </Text>
          <Text style={{ fontSize: '1.3rem', color: '#666d78'}}>{post?.title}</Text> 
        </Space>
        <Divider />
        <div style={{ marginTop: '2rem' }}>
          {post?.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div>No Post found.</div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default PostDetail;
