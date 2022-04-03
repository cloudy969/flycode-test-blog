import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import { postsAPI } from '../api/postsAPI';
import ChangePost from './ChangePost';


export default function Post(props) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'))

    let removePost = (e) => {
        e.preventDefault();
        postsAPI.removePost(props.post)
    };

    let formatedCreateDate = 
    `${new Date(props.post.created_at).toLocaleDateString()} ${new Date(props.post.created_at).getHours()}:${new Date(props.post.created_at).getMinutes()}`;
    
    let formatedUpdateDate = 
    `${new Date(props.post.updated_at).toLocaleDateString()} ${new Date(props.post.updated_at).getHours()}:${new Date(props.post.updated_at).getMinutes()}`;


    return (
        <Card className='mb-4'>
            <Card.Body>
                <Card.Title>
                    <div className='post-header-wrapper'>
                        <div className='post-header-info-wrapper'>
                            Пользователь {props.post.user_id}
                            <small className='text-muted small-text'>Опубликовано {formatedCreateDate}</small>
                        </div>
                        {props.post.user_id == currentUser?.id && 
                        <div className='post-actions-wrapper'> <ChangePost post={props.post}/> <CloseButton onClick={(e) => removePost(e)} /> </div>}
                    </div>

                </Card.Title>
                <Card.Text>
                    {props.post.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Обновлено {formatedUpdateDate}</small>
            </Card.Footer>
        </Card>
    )
}
