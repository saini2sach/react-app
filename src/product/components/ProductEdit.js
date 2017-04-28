import React from "react";
import { connect } from "react-redux";

import * as actions from "./../Action";
import { Link } from "react-router";

class ProductEdit extends React.Component {

    constructor(props) {
        super(props);

        //FIXME to be managed by Redux 
        this.state = {
            brands: []
        }
    }

    componentDidMount() {
        this.props.setLoading(true);

        fetch("http://localhost:7070/api/products/" + this.props.params.id)
            .then(response => response.json())
            .then(product => {
                this.props.setLoading(false);
                this.props.initProduct(product);
            })

        fetch("http://localhost:7070/api/brands")
            .then(response => response.json())
            .then(brands => {
                this.setState({
                    brands
                })
            })
    }
    onValueChangeHandler(name, e) {
        console.log("Property change", name, e.target.value);
        let fields = {};
        fields[name] = e.target.value;
        this.props.initProduct(Object.assign({}, this.props.product, fields))
    }

    saveProduct(e) {
            console.log("saving the product");
            e.preventDefault(); //to cancel form submission

            //PUT /api/products/100
            fetch('http://localhost:7070/api/products/' 
                                    + this.props.product.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.props.product)
            })
            .then( response => response.json() )
            .then ( () => {
                alert("product saved : " + this.props.product.name);
            })
    }

    render() {

        let options = this.state.brands.map(brand => <option value={brand.id} key={brand.id}> {brand.name} </option>);

        if (this.props.loading)
            return <h2>Loading single product...</h2>


        return (
            <div>
                {/*ID: {this.props.params.id}*/}

                <form action="" onSubmit={(e) => this.saveProduct(e)}>
                    <label htmlFor="name"> Name :</label>
                    <input type="text" name="name" id="name"
                        value={this.props.product.name}
                        onChange={(e) => { this.onValueChangeHandler("name", e) }}/> 
                    <br />

                    <label htmlFor="year"> Year :</label> 
                    <input type="text" name="year" id="year" 
                        value={this.props.product.year}
                        onChange={(e) => { this.onValueChangeHandler("year", e) }}/>
                    
                    <label htmlFor="">Brand : </label>
                    <select name="brandID" id={this.props.product.brandId}
                             onChange={(e) => { this.onValueChangeHandler("brandId", e) }} >
                                {options}
                    </select>
                    
                    <button type="submit">Save</button>
                </form>

                <Link to={`/products/view/${this.props.params.id}`} className="button"> View </Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.productState.product,
        loading: state.productState.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initProduct: (product) => dispatch(actions.editProduct(product)),
        setLoading: (status) => dispatch(actions.loadingProducts(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)