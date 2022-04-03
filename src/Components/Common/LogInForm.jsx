import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { authAPI } from '../api/authAPI';
import { useNavigate } from "react-router-dom";

export default function LogInForm(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function login(e) {
        e.preventDefault();
        await authAPI.getToken(email, password);
        await authAPI.getCurrentUserData();
        props.setIsAuth(true)
    };


    return (
        <Form onSubmit={(e) => login(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Пароль" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Войти
            </Button>
        </Form>
    )

}


