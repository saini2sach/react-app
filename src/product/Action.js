// Action Creator - Helper Methods

import * as ActionType from "./ActionType";


export const initProducts = (products) => {
    return {
            type: ActionType.INIT_PRODUCTS,
            products
    }
};

export const loadingProducts = (status) => {
    return {
        type: ActionType.LOADING,
        loading: status
    }    
};

export const editProduct = (product) => {
    return {
        type: ActionType.EDIT_PRODUCT,
        product
    }
}