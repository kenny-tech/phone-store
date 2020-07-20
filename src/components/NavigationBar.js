import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Phone Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Product</Nav.Link>
            </Nav>
            <Nav>
                My cart
            </Nav>
        </Navbar>
    )
}

export default NavigationBar;