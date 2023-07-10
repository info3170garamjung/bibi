
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import { Space, Typography, Divider, Button } from 'antd';
import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { formatDate } from '../../../utils/dateUtils';
const { Text } = Typography;
import { 
  DeleteFilled,
  ScissorOutlined,
} from '@ant-design/icons';
import { 
  REMOVE_POST_REQUEST,
} from '../../../reducers/post';
import { setEditingStatus, showPostFormAction } from '../../../reducers/post'

const formatDate = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);

    // 유효한 날짜 확인
    if (isNaN(createdAtDate.getTime())) {
      console.error('Invalid createdAt:', createdAt);
      return 'Invalid date';
    }
    
  const diffTime = Math.abs(now - createdAtDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffMinutes < 1) {
    return 'Just now'
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays < 10) {
    return `${diffDays} day${diffDay > 1 ? 's': ''} ago`;
  } else {
    return createdAtDate.toISOString().split('T')[0];
  }
};

const PostDetail = () => {
  const router = useRouter();
  const { title, postid } = router.query;
  const { mainPosts, removePostLoading } = useSelector((state) => state.post);

  console.log('router Redirect pages/category/[title]/[postid]:', router);

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

  
  const onEditPost = useCallback(() => {
    dispatch(showPostFormAction(true));
    dispatch(setEditingStatus(true));
    console.log("[postid].js -> p.id:", id, "id:", postid);
   router.push(`/edit/${postid}`);
  }, [dispatch, postid, router]);


  return (
    <AppLayout>
      <div style={{display: 'flex', justifyContent: 'space-between'}}> 
        <div>
        </div>
        <div>
          {id && post && post.User && post.User.id === id
          ? (
            <>
          <Button type="text" onClick={onEditPost} icon={<ScissorOutlined  style={{color: '#9d9ea1'}} />} ></Button>
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
          <Text style={{ fontSize: '1.7rem', color: '#262625', fontWeight: 'bold'}}>{post?.title}</Text> 
        </Space>
        <div style={{marginTop: '1.5rem'}}>
        <Text style={{ fontSize: '0.9rem', color:'#262625', fontWeight: 500, marginRight: '2rem'}}>{post?.User.nickname}</Text>
        <Text style={{ fontSize: '0.9rem', color: '#262625'}}>{formatDate(post?.createdAt)}</Text>
        </div>
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


