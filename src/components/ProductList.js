import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Image } from 'react-bootstrap';

import { storeProducts } from '../data';
import '../css/Product.css';

const ProductList = () => {

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (product_id) => {
        let product = storeProducts.find(product => product.id === product_id);
        console.log(product);
        setProduct(product);
        setShow(true);
    }

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
                                    <Button variant="primary" onClick={() => handleShow(product.id)}>
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
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <Image src={product.img} style={{width: '250px'}} />
                        </Col>
                        <Col md={6}>
                            {product.long_description}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add To Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default ProductList;