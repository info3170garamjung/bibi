
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import { Space, Typography, Divider, Button } from 'antd';
import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import { 
  LeftCircleOutlined 
} from '@ant-design/icons';

const PostDetail = () => {
  const router = useRouter();
  const { title, postid } = router.query;
  const { mainPosts } = useSelector((state) => state.post);
  const goBackButton = useCallback(() => {
    router.push('/')
  }, [router]);

  //const post = mainPosts.find((p) => p.id === id);
  const post = mainPosts.find((p) => {
    console.log("p.id:", p.id, "id:", postid);
    return p.id === postid;
  });
  return (
    <AppLayout>
        <div style={{display: 'flex', justifyContent: 'flex-start'}} onClick={goBackButton}>
          <Button type="text" icon={<LeftCircleOutlined />} style={{color: '#84a6f5'}}></Button>
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


