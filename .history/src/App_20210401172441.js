import React, { Component } from 'react';
import './App.css';


class App extends Component {

  outputnamedlistener = () => {
    const show = name.length;
  }


  
  render() {
    return (
      <div>
        <input type="text"></input>
        <br></br>
        <button
        onClick={this.outputnamedlistener} >Changed</button>
        <p></p>
      </div>
    );
  }
}


export default App;
