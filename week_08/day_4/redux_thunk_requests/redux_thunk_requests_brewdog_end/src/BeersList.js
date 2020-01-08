import React from 'react';

const BeersList = (props) => {

  const createBeersList = () => {
    return props.beersData.map((beer) => {
      return <li key={beer.id}>{beer.name}</li>
    });
  }

  return (
    <ol>
      { createBeersList() }
    </ol>
  );

}

export default BeersList;
