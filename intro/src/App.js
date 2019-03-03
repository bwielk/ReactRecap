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
    ],
    show_persons: false
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons_names.slice();
    const persons = [...this.state.persons_names]
    persons.splice(index, 1);
    this.setState({persons_names: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.show_persons;
    this.setState({show_persons: !doesShow});
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
            onClick={this.togglePersonsHandler.bind(this)}
            style={style}>
            Switch name
          </button>
          {this.state.show_persons === true ?
          <div>
            {this.state.persons_names.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}/>
            })}
          </div> : null }
      </div>
    )
  }
}

export default App;
