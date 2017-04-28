import React from 'react';
import {render} from "react-dom";

import "whatwg-fetch"; // this enable window.fetch or fetch to use, globally


import {Contact} from "./components/Contact";
import XYZ, {OurTeam} from "./components/About";
import {Layout} from "./components/Layout";
import {NotFound} from "./components/NotFound";

import {Home} from "./components/Home";

import {BrandList} from "./components/BrandList";

import {ReduxEx} from "./components/ReduxEx";

import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";

import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware} from "redux";

import productReducer from "./product/Reducer";
import {cartReducer} from "./cart"; // it check index file in cart folder and searches for cartReducer implicitly
import {cartRoutes} from "./cart";


import ProductList from "./product/components/ProductList";
import ProductEdit from "./product/components/ProductEdit";
import ProductView from "./product/containers/ProductViewContainer";


let rootReducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer
});


var loggerMiddleWare = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('logger dispatching', action);
      var result = next(action);
      console.log('logger next state', store.getState());
      return result;
    };
  };
};
import {cartMiddleWare} from "./cart";

let cartData = [];

if(window.localStorage.Shopping_Cart_Data) {
    cartData = JSON.parse(window.localStorage.Shopping_Cart_Data);
}

import thunk from "redux-thunk";

let store = createStore(rootReducer, {cartState: cartData}, applyMiddleware(thunk, loggerMiddleWare, cartMiddleWare));

function forThunk(dispatch) {
    console.log("thunk called..!", dispatch);
    
}

store.dispatch(forThunk);

const Test = ({title}) => (
    <h1>Test - {title}</h1>
)

class App extends React.Component {
    render() {
        let title = "React App";
        return (
                <div>
                    <h1> {title} </h1>
                    <h2> WebPack here </h2>

                    <Test title="Hello..!" />
                    
                    <Layout />
                    
                    {this.props.children}    {/*Similar to <router-outlet> of angular*/}
                   
                    {/*
                    <Contact/>
                    <XYZ/>
                    <OurTeam/>
                    */}
                </div>
                )
    }
}


render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}> 
                    <IndexRoute component={Home}/>
                    
                    <Route path="/about" component={XYZ} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/brand" component={BrandList} /> 
                    <Route path="/products" component={ProductList} />
                    <Route path="/products/edit/:id" component={ProductEdit} /> 
                    <Route path="/products/view/:id" component={ProductView} /> 
                    {cartRoutes}
                    <Route path="/redux" component={ReduxEx} />                
                    <Route path="*" component={NotFound} />

                </Route>
            </Router>
        </Provider>
        , document.getElementById('app')
    );


// render(<App />, document.getElementById('app'));

/* 
    --history-api-fallback is used for html5 histroy api fallback as now the url can be used for bookmarking, refreshing

    default exported class should be imported without curly braces and 
    can be named as anything no need to be the same name as export class name, 
    also in one JS files, there can be only one default class, all other should be without default

*/