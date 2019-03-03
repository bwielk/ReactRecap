import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './components/UserOutput.js';
import UserInput from './components/UserInput.js';
import EnteredValueValidation from './components/EnteredValueValdidation.js';
import CharComponent from './components/CharComponent.js';

class App extends Component {
  state = {
    username: "TestUser122",
    age: 0,
    email: '',
    enteredValue: "Sample value"
  };

  updateUsernameState = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  updateUserAge = (event) => {
    this.setState({
      age: event.target.value
    });
  };

  updateUserEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handleInputField = (event) => {
    this.setState({enteredValue: event.target.value})
  };

  render() {
    let enteredValueWithoutNonAlphaNums = this.state.enteredValue.replace(/[^A-Za-z0-9]/g, '')
    let listOfChars = enteredValueWithoutNonAlphaNums.split('')

    let characters = (
        <div>
          {listOfChars.map((char, index) => {
            return <CharComponent
              value={char}
              key={index}/>
          })}
      </div>
    );

    return (
      <div>
        <input type="text" onChange={(event) => this.handleInputField(event)}></input>
        <EnteredValueValidation
          maximumLength={20}
          minimalLength={10}
          typedText={this.state.enteredValue}/>
        {characters}
        <UserInput
          changeUsername={this.updateUsernameState.bind(this)}
          changeAge={this.updateUserAge.bind(this)}
          changeEmail={this.updateUserEmail.bind(this)}
        />
        <UserOutput
          username={this.state.username}
          age="23"
          email={this.state.email}/>
        <UserOutput
          username={this.state.username}
          age="26"
          email={this.state.email}/>
        <UserOutput
          username={this.state.username}
          age={this.state.age}
          email={this.state.email}/>
        <UserOutput
          username='test3user'
          age={this.state.age}
          email={this.state.email}/>
      </div>
    );
  };
}

export default App;
