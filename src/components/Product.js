import React from 'react';
import { Container } from 'react-bootstrap';

import NavigationBar from './NavigationBar';
import ProductList from './ProductList';

const Product = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Container>
                <h1 className='text-center p-3'>Our Products</h1>
                <ProductList/>
            </Container>
        </React.Fragment>
    )
}

export default Product;