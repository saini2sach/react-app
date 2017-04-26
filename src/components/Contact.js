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

    componentWillReceiveProps(nextProps) { // this lifecycle will call when any props of class changes
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

/*
    Every class should have a constructor, should contain super() invokation and minimal code;
    
    props of class should be passed as a params in constructor as well as super, as a best practice

    In constructor, if we have to initialize a variable, then it should be via using state(predefined)
    like - this.state = { propertyName: propertyValue}, so in anyother function, it can be updated by using
    setState, 
    like - this.setState({propertyName: this.state.propertyName + 4})

    <Address/> - Explaination - we can write it here if that is present in this files or we import Address class Component files
            we can write custom attribute(city) in this like as above.

*/