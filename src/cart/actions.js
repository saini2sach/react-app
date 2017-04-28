import * as types from "./constants";
 
export const addItemToCart = product => { 
                return { type: types.ADD_ITEM_TO_CART, 
                        item: {
                            name : product.name,
                            id : product.id,
                            brandId : product.brandId,
                            qty : 1,
                            price: 10000 + Math.ceil(Math.random() * 10000)
                        }
                }
}

export const removeItemFromCart = id => ({ type: types.REMOVE_ITEM_FROM_CART, id })
export const updateItemQuantity = (id, qty) => ({ type: types.UPDATE_ITEM_QUANTITY, id, qty })
export const emptyCart = () => ({ type: types.EMPTY_CART})