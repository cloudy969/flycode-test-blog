import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import LogInForm from './LogInForm';

export default function LogInBlock(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (<>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Вход
        </Button>

        <LogInModal
            {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
    );
}

function LogInModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Вход
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LogInForm {...props}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Отмена</Button>
        </Modal.Footer>
      </Modal>
    );
  }