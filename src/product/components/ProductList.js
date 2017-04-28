import React from "react";
import {connect} from "react-redux";

import * as actions from "../Action";

import {Link} from "react-router";

import {bindActionCreators} from "redux";
import {addItemToCart} from "../../cart/actions";


class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //Bad
        // this.props.dispatch(actions.initProducts([{
        //     name: 'Moto',
        //     id: 23
        // }]))
        /*  this.props.setLoading(true);

        fetch("http://localhost:7070/api/products")
        .then (response => response.json())
        .then ( products => {
             this.props.setLoading(false);
            this.props.initProducts(products);
        }) */

        this.props.fetchProducts();
    }

    render(){

        if(this.props.loading)
             return <h2>Loading products... </h2>

        let productList = this.props.products.map((p, i) => 
                        <li key={p.id} >
                                <Link to={`/products/edit/${p.id}`}> {p.name} </Link>
                                <button onClick={() => this.props.addItemToCart(p)}>+</button>
                        </li>
                        );
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ol>
                    {productList}
                </ol>
            </div>
        )
    }
}

// state is = store.getState();
const mapReduxStateToComponentProps = (state) => {

    // console.log("state is : ", state);
    return {
        title: "Product List", // can be accessed as this.props.title
        //Remove due to combineReducer
        // products: state.products,
        // loading: state.loading
        products: state.productState.products,
        loading: state.productState.loading
    }
}

const mapReduxDispatchToComponentProps = (dispatch) => {
    return {
        //dispatch
        // initProducts: (products) => dispatch(actions.initProducts(products)),
        // setLoading: (status) => dispatch(actions.loadingProducts(status))

        
    //   initProducts : bindActionCreators(actions.initProducts, dispatch),

    //   setLoading : bindActionCreators(actions.loadingProducts, dispatch),

      addItemToCart: bindActionCreators(addItemToCart, dispatch), 

      fetchProducts: () => dispatch(actions.fetchProducts())
    }
}

export default connect(mapReduxStateToComponentProps, mapReduxDispatchToComponentProps)(ProductList);