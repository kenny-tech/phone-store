import { ADD_TO_CART } from '../actions/types';

const initialState = {
    cart:[],
}

export default (state = initialState, action) => {
    switch( action.type ) {
        case ADD_TO_CART: 
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        default: 
            return state;
    }
}