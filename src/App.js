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

  switchNameHandler = (newName) => {
    console.log("Clicked")
    this.setState({
      persons_names: [
        {name: newName, age: 39},
        {name: "Alexander", age: 54},
        {name: "Robert", age: 61}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons_names: [
        {name: "Max", age: 29},
        {name: event.target.value, age: 34},
        {name: "Bobby", age: 21}
      ]
    })
  }

  render() {

    const style = {
      backgroundColour: 'ivory',
      font: 'inherit',
      border: '10px solid grey',
      padding: '5px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Welcome to the app</h1>
        <button
          onClick={()=> this.switchNameHandler("Adam")}
          style={style}>
          Switch name
        </button>
        <Person
          name={this.state.persons_names[0].name}
          hobby="drawing"
          click={this.switchNameHandler.bind(this, "Blaise")}>
        </Person>
        <Person
          name={this.state.persons_names[1].name}
          hobby="playing the guitar"
          click={this.switchNameHandler.bind(this, "Paul")}
          changeName={this.nameChangedHandler.bind(this)}>
        </Person>
        <Person
          name={this.state.persons_names[2].name}
          hobby="gardening"
          click={()=> this.switchNameHandler('Jeremy')}>
        </Person>
      </div>
      // The equivalent of the code written above
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now'), 'I am a react App')
    );
  }
}

export default App;
