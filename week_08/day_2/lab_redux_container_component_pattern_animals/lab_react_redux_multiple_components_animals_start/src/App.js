import React, { Component } from 'react';
import AnimalsListContainer from './containers/AnimalsListContainer';
import NewAnimalContainer from './containers/NewAnimalContainer';

class App extends Component {
  render() {
    return (
      <>
        <NewAnimalContainer />
        <h2>Animals</h2>
        <AnimalsListContainer />
      </>
    );
  }
}

export default App;
