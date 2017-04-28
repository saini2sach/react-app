export { default as cartRoutes } from './routes';

export { default as cartReducer } from './reducers/cart';

export function cartMiddleWare(store) {
  return function (next) {
    return function (action) {
      console.log('cart dispatching', action);
      var result = next(action);
      console.log('cart next state', store.getState());

      if(action.type.indexOf("CART") >= 0){
          console.log("cart middle ware: ", action.type);
          
          window.localStorage.setItem("Shopping_Cart_Data", JSON.stringify(store.getState().cartState));
      }
      return result;
    };
  };
};