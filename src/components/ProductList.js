import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Image, Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../actions/cart';
import { storeProducts } from '../data';
import '../css/Product.css';

const ProductList = () => {

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const is_cart = useSelector(state => state.cart.isCart);
    const added_product = useSelector(state => state.cart.addedProduct);

    const handleClose = () => setShow(false);
    
    const handleShow = (product_id) => {
        let product = storeProducts.find(product => product.id === product_id);
        console.log(product);
        setProduct(product);
        setShow(true);
    }

    const handleAddToCart = (product_id,product_title,product_price) => {
        dispatch(addToCart(product_id,product_title,product_price));
        setShow(false);
    }

    return (
        <Row>
            {
                is_cart ? (<Toast
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                    }}
                  >
                    <Toast.Header>
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>{added_product} successfully added to cart</Toast.Body>
                  </Toast>) : null
            }
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
                    <Button variant="primary" onClick={() => handleAddToCart(product.id,product.title,product.price)}>
                        Add To Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default ProductList;