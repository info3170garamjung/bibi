
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

