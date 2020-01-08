import React, { Component } from 'react';
import BeersListContainer from './BeersListContainer.js';

class App extends Component {

  render() {
    return (
      <>
        <h1>Brew Dog's Beers</h1>
        <BeersListContainer />
      </>
    )
  }

}

export default App;
