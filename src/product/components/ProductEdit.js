import React from "react";
import {connect} from "react-redux";

import * as actions from "../Action";

class ProductEdit extends React.Component {

    componentDidMount() {
        
        this.props.setLoading(true);

        fetch("http://localhost:7070/delayed/api/products/"+ this.props.params.id)
        .then (response => response.json())
        .then ( product => {
            this.props.setLoading(false);
            this.props.initProduct(product);
        })
    }

    render() {
        if(this.props.loading)
            return <h2>Loading single product...</h2>

        
        return (
            <div>
                ID: {this.props.params.id}
                <form action="">
                   <label htmlFor="name"> Name :</label> <input type="text" name="name" id="name" value={this.props.product.name}/> <br/>

                   <label htmlFor="year"> Year :</label> <input type="text" name="year" id="year" value={this.props.product.year}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initProduct: (product) => dispatch(actions.editProduct(product)),
        setLoading: (status) => dispatch(actions.editProduct(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)