import React from 'react';
import './Animal.css';

const Animal = (props) => {
  const handleRemoveClick = (evt) => {
    props.removeAnimal(props.index);
  }

  const {name, species, age} = props.animalData;

  return (
    <div className='animal'>
      <button onClick={ handleRemoveClick }>X</button>
      <h4>{name}</h4>
      <p>Species: {species}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Animal;
