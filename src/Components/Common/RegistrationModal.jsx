import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';

export default function RegistrationModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Регистрация
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm onHide={props.onHide} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Отмена</Button>
        </Modal.Footer>
      </Modal>
    );
  }