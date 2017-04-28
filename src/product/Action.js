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
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(loadingProducts(true));

    fetch("http://localhost:7070/api/products")
    .then (response => response.json())
    .then (products => {
        console.warn("Dispatching init")
        dispatch(loadingProducts(false));
        dispatch(initProducts(products))
    })
  }
}