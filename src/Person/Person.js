import React from 'react';

const person = (props) => {
  const array = ["Alex", "Brian", "Cindy"]
  return (
    <div>
          <hr/>
          <p>I am a person</p>
          <p>My name is {props.name}</p>
          <p>How are you doing?</p>
          <p>My best friend's name is {array[Math.floor(Math.random()*3)]} and I am so much into {props.hobby}</p>
    </div>
  );
};

export default person;