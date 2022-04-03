import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import NewPostForm from './NewPostForm';


export default function NewPostModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Новый пост
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewPostForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Отмена</Button>
          </Modal.Footer>
        </Modal>
      );
}
