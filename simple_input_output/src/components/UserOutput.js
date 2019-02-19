import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <hr/>
      <p>Name: {props.username}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default userOutput;
