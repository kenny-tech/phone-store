import React from 'react';
import { Container } from 'react-bootstrap';

import NavigationBar from './NavigationBar';

const Product = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Container>
                <h3 className='text-center p-3'>Our Products</h3>
            </Container>
        </React.Fragment>
    )
}

export default Product;