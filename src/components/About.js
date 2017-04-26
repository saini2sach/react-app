import React, {Component} from "react";

import {Like} from "./Like";


export default class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            totalLikes: 50,
            members: ['Saini', 'Mumuksh', 'Uttam', 'Sudipto'],
            name: 'Sachin'
        }
    this.updateLikes = this.updateLikes.bind(this);
    }

    toggle(){
        this.setState({
            show: !this.state.show
        })
    }

    updateLikes(total){
        this.setState({
            totalLikes: total
        })
    }
    onValueChange(e) {
        // console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }
    addMember(){
        this.setState({
            members: [this.state.name, ...this.state.members], // ...is the existing elements for reserving 
            name: ''
        })
    }

    render() {

        let membersList = this.state.members.map( (listItem, index) => <li key={index}> {listItem} </li>);
        return (
            <div>
                <h2> About Page..!</h2>
                <h3>Our Team List: </h3>

                <input name="memberName" value={this.state.name} onChange={this.onValueChange.bind(this)} />
                <button onClick={() => this.addMember()}>
                    +ADD
                </button>

                <ol>    
                    {membersList}
                </ol>
                <button onClick={() => this.toggle()}>Show/Hide</button>

                {this.state.show && <Like currentLikes={this.state.totalLikes} update={this.updateLikes}/>}

            </div>
        )
    }
}

export class OurTeam extends Component {
    render() {
        return (
            <div>
                <h2> About Our Team..!</h2>
            </div>
        )
    }
}