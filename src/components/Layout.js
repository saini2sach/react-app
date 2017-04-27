import React from "react";

import {Link} from "react-router";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/" className="button">Home</Link> &nbsp;
                    <Link to="/brand" className="button" activeClassName="success">Brand</Link>  &nbsp; 
                    <Link to="/products" className="button" activeClassName="success">Products</Link>  &nbsp; 
                    <Link to="/about" className="button" activeClassName="success">About</Link> &nbsp;
                    <Link to="/contact" className="button" activeClassName="success">Contact</Link>  &nbsp; 
                    <Link to="/redux" className="button" activeClassName="success">Redux</Link>  &nbsp; 
                </div>

                {/* Container for views, similar to ng-view */}
                {/* this.props.children */}
            </div>
        )
    }
}