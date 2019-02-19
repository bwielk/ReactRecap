import React from 'react'
import './UserInput.css'

const user_input = (props) => {
  return (
    <div class='UserInput'>
      <label>Name</label>
      <input
        class="user_input"
        type="text"
        onChange={props.changeUsername}>
      </input>
      <label>Age</label>
      <input
        class="user_input"
        type="number"
        onChange={props.changeAge}>
      </input>
      <label>Email</label>
      <input
        class="user_input"
        type="email"
        onKeyUp={props.changeEmail}>
      </input>
    </div>
  );
};

export default user_input;
