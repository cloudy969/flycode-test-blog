import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LogInBlock from '../Common/LogInBlock'
import RegistrationBlock from './RegistrationBlock'
import { useNavigate } from 'react-router-dom'
import { isLogedIn } from './isLogedIn'
import ProfileBlock from './ProfileBlock'


export default function Navigation() {

    let navigation = useNavigate();

    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        localStorage.clear();
        setIsAuth(false)
        navigation('/')
    }

    let userName = JSON.parse(localStorage.getItem('currentUser'))?.name;

    useEffect(() => {
        setIsAuth(isLogedIn())
    })

    return (
        <Navbar sticky='top' bg="light" expand="lg">
            <Container className='pt-3 pb-3'>
                <Navbar.Brand href="/">FlyCode Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/my-posts">Мои посты</Nav.Link>
                        <Nav.Link href="/my-comments">Мои комментарии</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {!isAuth && <div className='reg-wrapper'><LogInBlock isAuth={isAuth} setIsAuth={setIsAuth} /> <RegistrationBlock /></div>}
                {isAuth && <ProfileBlock userName={userName} logout={logout}/> }

                
            </Container>
        </Navbar>
    )
}
