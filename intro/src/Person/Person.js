import React from 'react';
// import './Person.css';
import Radium from 'radium';

const person = (props) => {
  // const style = {
  //   '@media(min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  const array = ["Alex", "Brian", "Cindy"]
  return (
    <div className="Person">
          <hr/>
          <p>I am a person</p>
          <p onClick={props.click}>My name is {props.name}</p>
          <p>How are you doing?</p>
          <p>My best friend's name is {array[Math.floor(Math.random()*3)]} and I am {props.age}</p>
          <label for='change-name'>New name</label>
          <input id='change-name' type="text" onChange={props.changeName}/>
          <label for='change-age'>New age</label>
          <input id='change-age' type="text" onChange={props.changeAge}/>
    </div>
  );
};

// export default Radium(person);
export default person;
