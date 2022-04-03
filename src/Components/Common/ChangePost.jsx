import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { postsAPI } from '../api/postsAPI';
import { ReactComponent as EditPost } from '../Assets/changePost.svg'

export default function ChangePost(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [postText, setPostText] = useState(props.post.text)

    let changePost = (e) => {
        e.preventDefault();
        postsAPI.changePost(props.post, postText)
        setModalShow(false);
    }


    return (
        <>
            <EditPost className='edit-post-btn' variant="outline-light" onClick={() => setModalShow(true)} />
            <ChangePostModal
                text={postText}
                changePost={changePost}
                setPostText={setPostText}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
};


function ChangePostModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактирование поста
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea className='post-form-textarea' maxLength={1000} name="text" value={props.text} onChange={(e) => props.setPostText(e.target.value)}></textarea>
                <Button onClick={(e) => props.changePost(e)}>Отправить</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
