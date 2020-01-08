import React from 'react';
import Animal from './Animal';
import './AnimalsList.css';

const AnimalsList = (props) => {

  const listItems = props.animals.map((animalData, index) => {
    return <Animal
      animalData={ animalData }
      key={index}
      index={index}
      removeAnimal={props.removeAnimal}
    />
  });

  return (
    <div id='animals-list'>
      { listItems }
    </div>
  );
}

export default AnimalsList;
