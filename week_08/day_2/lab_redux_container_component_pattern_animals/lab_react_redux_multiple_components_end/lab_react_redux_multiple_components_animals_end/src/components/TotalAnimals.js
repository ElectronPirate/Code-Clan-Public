import React from 'react';

const TotalAnimals = (props) => {

  return (
    <div id='animals-total'>
      <p>Total: { props.totalAnimal }</p>
    </div>
  );

};

export default TotalAnimals;
