import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import NewPostModal from './NewPostModal';


export default function AddNewPost() {
    const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Button variant="outline-success" onClick={() => setModalShow(true)}>
          Написать новый пост
        </Button>
  
        <NewPostModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}
