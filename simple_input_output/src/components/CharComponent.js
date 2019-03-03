import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {
  return (
    <p class='CharComponent'>{props.value}</p>
  );
};

export default charComponent;
