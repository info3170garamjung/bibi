
import React from "react"
import { Typography, Divider, Button } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
const { Text } = Typography;
import Link from 'next/link';
import styled from 'styled-components';
// import { formatDate } from "../utils/dateUtils";
// import { stripHtmlTags } from "../utils/stripHtmlTags";

const StyledDividerPt2 = styled.div`
border-top: 1px solid #e8e8e8;
margin: 24px 0;
`

const stripHtmlTags = (str) => {
  if((str === null) || (str === ''))
    return false;
  else 
    str = str.toString();
  str = str.replace(/<[^>]*>/g, ''); // HTML 태그 제거
  str = str.replace(/&[^;]+;/g, ''); // HTML 엔티티 제거
  return str;
}


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
    return `${diffDays} day${diffDays > 1 ? 's': ''} ago`;
  } else {
    return createdAtDate.toISOString().split('T')[0];
  }
};


const Announcement = () => {
  const router = useRouter();
  const { mainPosts } = useSelector((state) => state.post);

  const filteredPosts = mainPosts.filter((post) => post.category === 'Announce')

  return(
    <>
     <div style={{ display: 'inline-block'}}>
      <Text style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#2487e1cc', padding: '0.5rem'}}>Announcement</Text>
      <Divider style={{backgroundColor: '#2487e187', marginTop: '0.5rem', height: '2px'}} />
      </div>
    <div style={{marginTop: '2rem'}}>
      {filteredPosts.length > 0 ? 
        filteredPosts.map(post => (
          <>
            <div style={{ marginBottom: '3rem'}}>
              <Link href={`/category/${post.category}/${post.id}`}>
              <Text style={{ color: '#3d3d3c', fontSize: '1.7rem', fontWeight: 'bold'}}>{post.title}</Text>
              </Link>
              <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem',marginTop: '0.7rem', color:'#4f4f4e'}}>
                {stripHtmlTags(post.content).length > 150 ? `${stripHtmlTags(post.content).substring(0, 150)}...` : stripHtmlTags(post.content)}
            </div>
            <Text type="secondary" style={{fontSize: '0.9rem'}}>{formatDate(post.createdAt)}</Text>
            </div>
            <StyledDividerPt2 />
          </>
        ))
        : <div>No Posts found.</div>}
        </div>  
        </>
  )
    };
      
export default Announcement;