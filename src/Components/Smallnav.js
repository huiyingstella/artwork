import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import search from '../img/search.svg'


export default function Smallnav() {
    return (
        <SmallnavStyled>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="UCC" href="#home">UCC&nbsp;&nbsp;</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">News + Events</Nav.Link>
                            <Nav.Link href="#link">Upload</Nav.Link>
                            <NavDropdown title="Browse" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Music</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
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
    background-color: transparent;
    }
`
