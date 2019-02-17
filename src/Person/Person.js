import React from 'react';

const person = (props) => {
  const array = ["Alex", "Brian", "Cindy"]
  return <p>I am a person.
          I am {Math.floor(Math.random()*30)} years old!
          My name is {array[Math.floor(Math.random()*3)]}.
          How are you doing?
          My best friend's name is {props.friendName} and I am so much into {props.hobby}
        </p>
};

export default person;
