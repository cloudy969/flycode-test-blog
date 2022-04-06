import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { postsAPI } from '../api/postsAPI'
import Post from '../Common/Post'


export default function MyPosts(props) {

  const [posts, setPosts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);



  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    postsAPI.getPosts(setPosts);
    setIsUpdated(false)
  }, [isUpdated])

  useEffect(() => {
    postsAPI.getPosts(setPosts);
    props.setIsAdded(false)
  }, [props.isAdded])


  let ownPost = posts.map(post => post.user_id === currentUser?.id ? <li key={post.id}> <Post setIsUpdated={setIsUpdated} key={post.id} post={post} /> </li> : null)

  return (
    <Container className='pt-3 pb-3'>
      <ul>
        {ownPost}
      </ul>
    </Container>
  )
}
