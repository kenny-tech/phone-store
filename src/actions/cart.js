import { ADD_TO_CART } from './types';

export const addToCart = (product_id,product_title,product_price) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product_id,
            product_title,
            product_price
        }
    }
}