import React from 'react'

const enteredValueValidation = (props) => {

  let result = null

  const lengthOfEnteredText = props.typedText.length

  if(lengthOfEnteredText > props.maximumLength){
    result = (
        <p>The entered text is too long - length {lengthOfEnteredText}</p>
    )}
  else if(lengthOfEnteredText < props.minimalLength){
    result = (
        <p>The entered text is too short - length {lengthOfEnteredText}</p>
    )}
  else{
    result = (
        <p>{props.typedText}</p>
  )}

  return (
    <div>
      {result}
    </div>
  );
};

export default enteredValueValidation;
