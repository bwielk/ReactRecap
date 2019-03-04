import React from 'react'
import './CharComponent.css'

const charComponent = (props) => {

  return (
    <p className='CharComponent'
      onClick={props.click}>{props.value}</p>
  );
};

export default charComponent;
