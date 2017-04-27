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
import {createStore} from "redux";

import productReducer from "./product/Reducer";

import ProductList from "./product/components/ProductList";
import ProductEdit from "./product/components/ProductEdit";

let store = createStore(productReducer);

class App extends React.Component {
    render() {
        let title = "React App";
        return (
                <div>
                    <h1> {title} </h1>
                    <h2> WebPack here </h2>

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