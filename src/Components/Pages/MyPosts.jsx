import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { postsAPI } from '../api/postsAPI'
import Post from '../Common/Post'


export default function MyPosts() {

  const [posts, setPosts] = useState([])

  let currentUser = JSON.parse(localStorage.getItem('currentUser'))

  useEffect(() => {
    postsAPI.getPosts(setPosts);
  }, [])


  let ownPost = posts.map(post => post.user_id === currentUser?.id ? <li key={post.id}> <Post key={post.id} post={post} /> </li> : null)

  return (
    <Container className='pt-3 pb-3'>
      <ul>
        {ownPost}
      </ul>
    </Container>
  )
}
