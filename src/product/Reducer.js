
import * as ActionType from "./ActionType";

const initialState = {
    products: [{name: 'Iphone', id: 21}],
    loading: false,
    product: {}
}

export default function (state = initialState, action) {
    console.log("Product reducer..!", state, action);

    switch(action.type) {
        case ActionType.INIT_PRODUCTS: {
            // return {
            //     products: action.products,
            //     loading: state.loading,
            //     product: state.product
            // }
            return Object.assign({}, state, {products: action.products});
        }

        case ActionType.LOADING: {
            // return {
            //     products: state.products,
            //     loading: action.loading,
            //     product: state.product
            // }
            return Object.assign({}, state, {loading: action.loading});
            
        }

        case ActionType.EDIT_PRODUCT: {
            // return {
            //     product:action.product,
            //     loading: state.loading,
            //     products: state.products
            // }
            return Object.assign({}, state, {product: action.product});
            
        }

        default: 
            return state;


    }
}