import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    number_of_clicks: 1,
    persons_names: [
      {id: 1, name: "Max", age: 29},
      {id: 2, name: "Alex", age: 34},
      {id: 3, name: "Bobby", age: 21}
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

  nameChangedHandler = (event, id) => {
    const foundPersonIndex = this.state.persons_names.findIndex(p => {
        return p.id === id
    })
    const person ={...this.state.persons_names[foundPersonIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons_names]
    persons[foundPersonIndex] = person
    this.setState({persons_names: persons})
  }

  ageChangeHandler = (event, id) => {
    const foundPersonIndex = this.state.persons_names.findIndex(p => {
      return p.id === id
    })
    const person ={...this.state.persons_names[foundPersonIndex]}
    person.age = event.target.value

    const persons = [...this.state.persons_names]
    persons[foundPersonIndex] = person
    this.setState({persons_names:persons})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '5px solid grey',
      padding: '1px',
      cursor: 'pointer',
      // ':hover':{
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null

    if (this.state.show_persons === true){
      persons = (
        <div>
          {this.state.persons_names.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changeName={(event) => this.nameChangedHandler(event, person.id)}
              changeAge={(event) => this.ageChangeHandler(event, person.id)}/>
          })}
      </div>
    );
    style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'ivory',
    //   color: 'black'
    // }
  }

  let classes = []
  //let classes = ['red', 'bold', 'background'].join(' ')
  if(this.state.persons_names.length <= 2){
    classes.push('red')
  }
  if(this.state.persons_names.length <= 1){
    classes.push('bold')
  }
  if(this.state.persons_names.length ==0){
    classes.push('background')
  }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Welcome to the app</h1>
          <p className={classes.join(' ')}>This is working</p>
            <button
              onClick={this.togglePersonsHandler.bind(this)}
              style={style}>
              Switch name
            </button>
            {persons}
        </div>
      // </StyleRoot>
    )
  }
}

// export default Radium(App);
export default App;
