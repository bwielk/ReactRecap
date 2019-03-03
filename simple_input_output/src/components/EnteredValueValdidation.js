import React from 'react'

const enteredValueValidation = (props) => {

  let result = null

  const lengthOfEnteredText = props.typedText.length

  if(lengthOfEnteredText > props.acceptableLength){
    result = (
      <div>
          <p>The entered text is too long</p>
      </div>
    )}
  else{
    result = (
      <div>
          <p>{props.typedText}</p>
      </div>
  )}

  return (
    <div>
      {result}
    </div>
  );
};

export default enteredValueValidation;
