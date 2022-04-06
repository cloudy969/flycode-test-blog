import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import LogInBlock from '../Common/LogInBlock'
import RegistrationBlock from './RegistrationBlock'
import { isLogedIn } from './isLogedIn'
import ProfileBlock from './ProfileBlock'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Navigation(props) {

   let navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/');
    }

    let userName = JSON.parse(localStorage.getItem('currentUser'))?.name;

    useEffect(() => {
        setIsAuth(isLogedIn())
    }, [isAuth])

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
                    {!isAuth && <div className='reg-wrapper'><LogInBlock isAuth={isAuth} setIsAuth={setIsAuth} /> <RegistrationBlock /></div>}
                    {isAuth && <ProfileBlock {...props} userName={userName} logout={logout} />}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
