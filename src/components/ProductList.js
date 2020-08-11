import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';

import { storeProducts } from '../data';
import '../css/Product.css';

const ProductList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Row>
                {storeProducts.map(product => {
                    return (
                        <Col md={3} className="m-2" key={product.id}>
                            <Card className="productCard">
                                <Card.Img variant="top" className="productImage" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.title}<span className="float-right">${product.price}</span></Card.Title>
                                    <Card.Text>
                                        {product.short_description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={handleShow}>
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
        
    )
}

export default ProductList;