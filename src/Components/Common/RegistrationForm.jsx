import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { registrationAPI } from '../api/registrationAPI';


export default function RegistrationForm(props) {
    debugger
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    let handleRegistration = (e) => {
        e.preventDefault();
        e.stopPropagation();
        registrationAPI.sendRegistrationaData(name, email, password, passwordConfirmation)
        props.onHide()
    }

    return (
        <Form onSubmit={(e) => handleRegistration(e)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Подтвердите пароль</Form.Label>
                <Form.Control type="password" placeholder="Подтвердите пароль" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Отправить
            </Button>
        </Form>
    )
}


