import React from "react";
import AppLayout from "../../components/AppLayout";
import { useRouter } from 'next/router'
import { Divider, Typography } from "antd";

const { Text, Title, Paragraph } = Typography;
const AnnouncementDetail = () => {
const router = useRouter();
const { key } = router.query;

return(
  <>
    <AppLayout>
      {key === '1' && 
        <>
          <div style={{margin: '1.5rem'}}>
            <h2>Blog Guildline</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#808080', fontSize: '0.8rem'}}>
            <div>DevDiary</div>
            <div>2023.06.04 11:10</div>
          </div>
          <Divider />
          <Paragraph>
            <Title level={4}>Welcome to DevDiary, your ultimate blogging platform for learning and sharing knowledge!</Title>
            <Text>Here at DevDiary, we believe in the power of shared knowledge. As a member of our platform, you can write, post and share your notes on various topics such as 
            <Text mark> JavaScript</Text>, <Text mark>TypeScript</Text>, <Text mark>React</Text>, <Text mark>Node.js</Text>, <Text mark>Git</Text>, <Text mark>Cloud</Text>, and <Text mark>Databases</Text>.
            </Text>
              <br />
              <br />
            <Text>
              You can use this platform as a diary of your learning journey, keep track of your progress, or use it as a notepad to jot down important parts of your studies.
            </Text>
              <br />
              <br />
            <Text strong>
              Once you've signed up and logged in, you can start to write your own posts, sharing your knowledge and learning with our community. By checking others' posts, you can also learn from them and enhance your understanding in various fields. Even if you haven't signed up, you can still view others' posts and benefit from their shared knowledge.
            </Text>
              <br />
              <br />
            <Text>
              Sign up is easy - all you need is a unique email address, and you can become part of our knowledge sharing community.
            </Text>
          </Paragraph>
          </div>
        </>
      }
      {key === '2' && 
        <>
          <div style={{margin: '1.5rem'}}>
            <h2>Blog Improvement Plan</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#808080', fontSize: '0.8rem'}}>
            <div>DevDiary</div>
            <div>2023.06.04 12:15</div>
            </div>
         <Divider />
         <Paragraph>
            <Title level={4}>We are excited to announce our upcoming improvements for our blog!</Title>
            <Text>Starting from <Text mark>7th June, 2023</Text>, we will be implementing the following updates to improve our service:</Text>
            <br />
            <br />
            <Title level={5}>Enhancements:</Title>
            <Text strong>- More features for your convenience</Text>
            <br />
            <Text>We will be adding more features such as the ability to attach images, personalize your profile with a profile picture, and a self-introduction feature. Not only that, but you will also be able to comment on each blog post for more interactive communication.</Text>
            <br />
            <br />
            <Title level={5}>Bug fixes:</Title>
            <Text strong>- Improving your blog experience</Text>
            <br />
            <Text>We will also address some of the existing issues such as occasional redirections and improve overall speed and performance.</Text>
            <br />
            <br />
            <Title level={5}>Server Development:</Title>
            <Text strong>- Better data handling</Text>
            <br />
            <Text>Our team is working hard to develop server-side API's for better data transfer and handling. Stay tuned for more updates on this.</Text>
            <br />
            <br />
            <Text>We appreciate your patience and support as we work to make your DevDiary experience even better. Stay tuned for more exciting updates!</Text>
         </Paragraph>
         </div>
       </>
      }
    </AppLayout>
  </>
  )
}
export default AnnouncementDetail;