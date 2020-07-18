import React from 'react';
import { Container } from 'react-bootstrap';


const Navbar = () => {
    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Phone Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Product</Nav.Link>
                </Nav>
                <Nav>
                    My cart
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Navbar;