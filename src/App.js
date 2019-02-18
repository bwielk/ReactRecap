import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    number_of_clicks: 1,
    persons_names: [
      {name: "Max", age: 29},
      {name: "Alex", age: 34},
      {name: "Bobby", age: 21}
    ]
  }

  switchNameHandler = () => {
    console.log("Clicked")
    alert('Clicked ' + this.state.number_of_clicks + ' times')
    this.state.number_of_clicks += 1
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons_names[0].name} hobby="drawing"></Person>
        <Person name={this.state.persons_names[1].name} hobby="playing the guitar"></Person>
        <Person name={this.state.persons_names[2].name} hobby="gardening"></Person>
      </div>
      // The equivalent of the code written above
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now'), 'I am a react App')
    );
  }
}

export default App;
