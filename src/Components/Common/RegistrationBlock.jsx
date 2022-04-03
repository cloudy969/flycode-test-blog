import React from 'react'
import { Button } from 'react-bootstrap';
import RegistrationModal from './RegistrationModal';



export default function RegistrationBlock() {
    const [modalShow, setModalShow] = React.useState(false);

    return (<>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Регистрация
        </Button>

        <RegistrationModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
    );
}
