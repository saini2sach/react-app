import React from 'react';

import {render} from "react-dom";

import {Contact} from "./components/Contact";
import XYZ, {OurTeam} from "./components/About";


class App extends React.Component {
    render() {
        let title = "React App";
        return (
                <div>
                    <h1> {title} </h1>
                    <h2> WebPack here </h2>

                    <Contact/>
                    <XYZ/>
                    <OurTeam/>
                </div>
                )
    }
}

render(<App />, document.getElementById('app'));

/* 
    default exported class should be imported without curly braces and 
    can be named as anything no need to be the same name as export class name, 
    also in one JS files, there can be only one default class, all other should be without default

*/