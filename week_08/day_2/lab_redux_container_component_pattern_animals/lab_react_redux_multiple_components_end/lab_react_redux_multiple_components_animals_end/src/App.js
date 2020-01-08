import React, { Component } from 'react';
import AnimalsListContainer from './components/AnimalsListContainer';
import AnimalFromContainer from './components/AnimalFormContainer';
import TotalAnimalsContainer from './components/TotalAnimalsContainer';

class App extends Component {
  render() {
    return (
      <>
        <AnimalFromContainer />
        <h2>Animals</h2>
        <TotalAnimalsContainer />
        <AnimalsListContainer />
      </>
    );
  }
}

export default App;
