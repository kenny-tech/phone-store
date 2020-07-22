import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { storeProducts } from '../data';
import '../css/Product.css';

const ProductList = () => {
    return (
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
                                <Button variant="primary" className="btn-sm">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductList;