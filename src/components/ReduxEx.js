import React from "react";

import {createStore} from "redux";

const initialState = [];

function memberReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_MEMBER':
            return [...state, action.value]
        case 'REMOVE_MEMBER':
            return state.filter(m => m != action.value);
        default: {
            return state;
        }
    }
}

let seed  = ['Angular', 'Node'];
let store = createStore(memberReducer, seed);

store.subscribe( () => {
    // console.log("state subscribed: ", store.getState())
})

store.dispatch({
    type: 'ADD_MEMBER',
    value: 'react'
})

store.dispatch({
    type: 'ADD_MEMBER',
    value: 'redux'
})

function addMemberActionCreator(a) {
    return {
        type: 'ADD_MEMBER',
        value: a
    }
}

store.dispatch(addMemberActionCreator("Via Redux"));

setInterval( () => {
    store.dispatch(addMemberActionCreator("Random No. : "+ Math.random()));
}, 10000);

export class ReduxEx extends React.Component {
    
    componentDidMount(){
        this.unsubscribe =  store.subscribe(() => {
            this.forceUpdate();
        })
        this.memberInput.focus(); // it focus on the input element

       //  console.log(this.profs.ref);
    }

    componentWillUnmount(){
        clearInterval(this.unsubscribe);
    }

    addMember(){
        store.dispatch({
            type: 'ADD_MEMBER',
            value: this.memberInput.value
        });
    }

    removeMember(){
        store.dispatch({
            type: 'REMOVE_MEMBER',
            value: this.memberInput.value
        });
    }

    render() {
        let membersList = store.getState().map((m,index) => <li key={index}> {m} </li>);
        return (
            <div>
                <h1>Redux</h1>
                <input name="sachin" ref={ (element) => this.memberInput = element} />
                <button onClick={() => this.addMember()}>ADD</button> &nbsp;
                <button onClick={() => this.removeMember()}>Remove</button>
                <ul>
                    {membersList}
                </ul>
            </div>
        )
    }
}