import React,{ useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import search from '../img/search.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../Store/User';
import { useNavigate } from 'react-router-dom';




export default function Smallnav() {
    const navigate = useNavigate();
    const isLoginSuccess = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (isLoginSuccess) {
            navigate('/uploadpage');
        } else {
            navigate('/upload');
        }
    }
        return (
            <SmallnavStyled>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand className="UCC" href="/">UCC&nbsp;&nbsp;</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/news">News + Events</Nav.Link>
                                <Nav.Link href="/upload" onClick={handleButtonClick}>Upload</Nav.Link>
                                <NavDropdown title="Browse" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="https://shoccproject.wordpress.com/soundscapes/" target="_blank" rel="noreferrer">Music</NavDropdown.Item>
                                    <NavDropdown.Item href="/paintings/2024">
                                        Paintings
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Sculptures</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Installations
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Community" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Explore" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link"><img id='search' src={search} alt="My Icon" /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </SmallnavStyled>
        )
    }
    const SmallnavStyled = styled.nav`
display: flex;
justify-content: flex-end;
background-color:white;
#search{
    width:30px;
    height:30px;
}
@media (max-width: 992px) {
    background-color: #666666;
    justify-content: flex-start;
    }
`
