import React from 'react';

import {render} from "react-dom";

import {Contact} from "./components/Contact";
import XYZ, {OurTeam} from "./components/About";

// XYZ is import of default class, name can be anything with respect to exported class
// OurTeam is import of normal class, name should be same as exported class

class App extends React.Component {
    render() { 
        let title = "React App";
        return ( // this braces help for collecting whole components for return, like now we can write by giving new line 
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

render(<App />, document.getElementById('app')); // it select an element with 'app' id and 
                                        // then write the returned of APP class in innerHTML of that selected element 

/* 
    default exported class should be imported without curly braces and 
    can be named as anything no need to be the same name as export class name, 
    also in one JS files, there can be only one default class, all other should be without default

*/

/*
    render() - it provides the whole return template to that class in which it is written, 
    like if we import this App class in other components, then by writing <App/>, we got whole template there.!

    interpolation - binding of variable can be done by {} 

    return - for best practices, all content that should be returned, wrapped in a braces-(), 
    that helps the case when we give a new line after return(as then content will be ignored)

    Also we can return only one element, so all collection should be wrapped in a parent element
    and then it should be returned.
*/