import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


export default function PaintNav() {
    return (
        <>
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="2024">2024</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="2023">2023</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">2022</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">2021</Nav.Link>
            </Nav.Item>
        </Nav>
        <Outlet />
        </>
    )
}
