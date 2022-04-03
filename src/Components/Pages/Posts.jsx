import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { postsAPI } from '../api/postsAPI';
import Post from '../Common/Post';


export default function Posts() {
  const [posts, setPosts] = useState([]);

  let post = posts.map(post => <li key={post.id}> <Post key={post.id} post={post} /> </li>)

  useEffect(() => {
    postsAPI.getPosts(setPosts)
  }, []);

  return (
    <Container className='pt-3 pb-3'>
        <ul>
          {post}
        </ul>
    </Container>
  )
}
