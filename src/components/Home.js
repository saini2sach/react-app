import React from "react";

import ReactDOM from "react-dom";

import $ from "jquery";

export class Home extends React.Component {

    componentDidMount(){
        let dom = ReactDOM.findDOMNode(this);

        // $("h1").text("jquery"); find all h1 and replace their text, bad practice- avoided

        // scoped lookup, within home
        $(dom).find('h1').text('Home Jquery');
    }

    render() {
        return (
            <div>
                <h1>
                    Home
                </h1>
            </div>
        )
    }
}