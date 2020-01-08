import React from 'react';
import './List.css';

const PizzaSizesList = (props) => {
  const listItems = []

  for (const size in props.sizes) {
    const item = <li key={size}>{size}: {props.sizes[size]}"</li>
    listItems.push(item);
  }

  return <ul>{listItems}</ul>;
}

export default PizzaSizesList;
