import React from 'react'
const Answer = ({option, id}) => {
  return (
    <div className='chechbox'>
      <input type="checkbox" name='answer'/>
      <label form='answer'>{option}</label>
    </div>
  );
}

export default Answer
