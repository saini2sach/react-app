
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
            return {
                products: action.products,
                loading: state.loading,
                product: state.product
            }
        }

        case ActionType.LOADING: {
            return {
                products: action.products,
                loading: action.loading,
                product: state.product
            }
        }

        case ActionType.EDIT_PRODUCT: {
            return {
                product:action.product,
                loading: state.loading,
                products: state.products
            }
        }

        default: 
            return state;


    }
}