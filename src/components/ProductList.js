import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductList = () => {
    return (
        <Row>
            <Col md={3} className="m-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Product Title<span class="float-right">$20</span></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" className="btn-sm">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ProductList;