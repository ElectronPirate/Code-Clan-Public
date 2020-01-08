import React from 'react';
import Card from './Card.js';

const Grid = (props) => {

  const cards = props.characters;

  const cardList = cards.map((card, index) => {
    return (
      <Card characteristics={card} key={index} index={index} onFlip={props.onFlip}></Card>
    )
  })

  return (
    <div>
      {cardList}
    </div>
  )

};

export default Grid;
