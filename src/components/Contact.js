import React, {Component} from "react";

export class Contact extends Component {

    constructor(){
        super();
        
        // this.pincode = 122016; // bad practice, avoided

        //Good one

        this.state = {
            pincode: 123001
        }
        // setInterval(() => {
        //     // Bad practice
        //     // this.state.pincode++;
        //     // this.forceUpdate();

        //     //Good one
        //     this.setState({
        //         pincode: this.state.pincode + 1
        //     })
        // }, 2000)
    }
    render() {
        console.log("From contact: ", this.state.pincode);
        return (
            <div>
                <h2> Contact Page..!</h2>
                <Address city="Delhi" state="NDLS" pincode={this.state.pincode}/>
            </div>
        )
    }
}

class Address extends Component {

    constructor(props) {
        super(props);
        console.log("Address created.!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("props: ", nextProps);
    }

    render() {
        return (
            <div>
                <h3> Address </h3>
                <p> City: {this.props.city} </p>
                <span> State: {this.props.state} </span>
                <p>Country : {this.props.country}</p>
                <p> Pin-Code: {this.props.pincode}</p>
            </div>
        )
    }
}

Address.defaultProps = {
    country: "India" // default value for this property of class
}