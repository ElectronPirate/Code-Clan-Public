import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeersListContainer from './BeersListContainer.js';

class App extends Component {

  componentDidMount() {
    this.props.getBeersData();
  }

  render() {
    return (
      <>
        <h1>Brew Dog's Beers</h1>
        <BeersListContainer />
      </>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  getBeersData() {
    dispatch(() => {
      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beersData => {
        return dispatch({
          type: 'ADD_DATA',
          beersData
        });
      });
    });
  }
});

export default connect(null, mapDispatchToProps)(App);
