import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './components/UserOutput.js';
import UserInput from './components/UserInput.js';

class App extends Component {
  state = {
    username: "TestUser122",
    age: 0,
    email: ''
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

  render() {
    return (
      <div>
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
