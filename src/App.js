import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the app</h1>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </div>
      // The equivalent of the code written above
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now'), 'I am a react App')
    );
  }
}

export default App;
