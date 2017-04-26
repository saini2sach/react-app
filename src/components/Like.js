import React, {Component} from "react";

export class Like extends Component {
    //FIXme : props

    constructor(props) {
        super(props); // used to write super for  - need to call base class constructor explicitly, specially for ES6 not for react 
        // this.likes = 0; // should be avoided, instead use state mgmt of react
        
        this.state = {
            likes: props.currentLikes
        }

        this.increment = this.increment.bind(this); // method is not available for template explicitly, so we have to bind it with current object
        this.decrement = this.decrement.bind(this);

        // should be placed into willMount, as constructor should be cleaned, best practice
        // setInterval(() => {
        //     console.log("Like: timer incremented..!");
        //     this.setState({
        //         likes: this.state.likes + 1
        //     })
        //     // this.likes++;
        //     // console.log(this.likes);
        //     // this.forceUpdate(); // used to provide the updated value to template
        // }, 2000);
    }

    componentWillMount() {
        console.log("called before mounting the html into real dom");

        this.handle = setInterval(() => {
            console.log("Like: timer incremented..!");
            this.increment();
            // this.setState({
            //     likes: this.state.likes + 1
            // })
            // this.likes++;
            // console.log(this.likes);
            // this.forceUpdate(); // used to provide the updated value to template
        }, 20000);
    } 

    componentDidMount() {
        console.log("called after placing view into real dom"); 
        // Component-lifecycle order is constructor -> willMount -> shouldUpdate -> render -> DidMount -> if component destroy then Unmount
        // shouldComponentUpdate() - if via state and forceUpdate, value is getting changed then first it passes true to this life
        // cycle, so it can modify it and send to render implictly, if it send false then render didn;t called
    } 

    shouldComponentUpdate() {
        if(this.state.likes % 5 === 0){
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        clearInterval(this.handle);
        console.log("like : called just before component destroy from the dom");
    } 

    increment(event) {
        console.log("incremented.! ", this.state.likes);
        //console.log(event.target);
        this.setState({
                likes: this.state.likes + 1
        })
        
        this.props.update(this.state.likes);
    }
    decrement() {
        console.log("decremented.! ", this.state.likes);
        this.setState({
                likes: this.state.likes - 1
        })
        this.props.update(this.state.likes);
    }
    render() {
         console.log("like render method");

        return (
            <div>
                <h2> Likes on this Page..! = {this.state.likes}</h2>
                <button onClick={this.increment}> +1 </button> &nbsp;
                <button onClick={this.decrement}> -1 </button> &nbsp;
                <button onClick={(event) => this.increment(event)}> +1(ES6) </button> &nbsp;
            </div>
        )
    }
}