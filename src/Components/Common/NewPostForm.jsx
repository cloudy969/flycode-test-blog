import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postsAPI } from '../api/postsAPI';

export default function NewPostForm(props) {

    let navigation = useNavigate();

    const [newPostText, setNewPostText] = useState('');

    const sendNewPost = (e) => {
        e.preventDefault();
        postsAPI.sendNewPost(newPostText, props.setIsAdded);
        navigation('/my-posts');
        props.onHide();
    }


    return <>
        <textarea className='post-form-textarea' maxLength={1000} name="text" value={newPostText} onChange={(e) => setNewPostText(e.target.value)}></textarea>
        <Button onClick={(e) => sendNewPost(e)}>Отправить</Button>
    </>


}