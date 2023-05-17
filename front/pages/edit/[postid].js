import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './../../components/PostForm';
import AppLayout from '../../components/AppLayout';

const EditPostPage = () => {
  const router = useRouter();
  const { postid } = router.query;
  const post = useSelector((state) => state.post.mainPosts.find((p) => p.id === postid));

  if(!post || !post) {
    return <div>Invalid postid or post not found.</div>;
  }
  return (
    <>
    <AppLayout>
    <h1>Edit Post</h1>
    <PostForm post={post} />
    </AppLayout>
    </>
  )
}

export default EditPostPage;