import React from 'react';
import {render} from 'react-dom';

import {Greeting} from "./greeting";
   
class App extends React.Component {
  render () {
   
    return (
          <div>
            <h2>React App Workshop </h2>
            <Greeting />
 
          </div>
    );
  }
}

render(<App/>, document.getElementById('root'));