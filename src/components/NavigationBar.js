import React, { useState } from 'react';
import { Navbar, Nav, Modal, Row, Col, Button } from 'react-bootstrap';

import { useSelector } from 'react-redux';

const NavigationBar = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => setShow(false);

    const cart = useSelector(state => state.cart.cart);

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Phone Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Product</Nav.Link>
            </Nav>
            <Nav onClick={() => handleShow()}>
                My cart
            </Nav>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        cart.length > 0 ? (<div>
                            <Row>
                                <Col md={3}>
                                    <p className="text-bold">Product</p>
                                </Col>
                                <Col md={3}>
                                    <p>Price</p>
                                </Col>
                                <Col md={3}>
                                    <p>Quanitity</p>
                                </Col>
                                <Col md={3}>
                                    <p>Total</p>
                                </Col>
                            </Row>
                            {
                                cart.map(product => {
                                    return (
                                        <Row>
                                            <Col md={3}>
                                                {product.product_title}
                                            </Col>
                                            <Col md={3}>
                                                ${product.product_price}
                                            </Col>
                                            <Col md={3}>
                                                1
                                            </Col>
                                            <Col md={3}>
                                                {product.product_price}
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                            
                        </div>) : (<p className="text-center">No product in your cart</p>)
                    }   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Shop
                    </Button>
                    <Button variant="primary">
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
}

export default NavigationBar;