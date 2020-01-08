import React, { Component } from 'react';
import CountriesSelectContainer from './components/CountriesSelectContainer.js';
import BucketListContainer from './components/BucketListContainer.js';
import BucketListVisitedContainer from './components/BucketListVisitedContainer.js';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return (
      <>
        <h1 id='title'>Bucket List</h1>
        <CountriesSelectContainer />
        <div id="lists">
          <div className="col">
            <h2>Places to Visit</h2>
            <BucketListContainer />
          </div>
          <div className="col">
            <h2>Places Visited</h2>
            <BucketListVisitedContainer />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(() => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countryData => {
          return dispatch({
            type: 'GET_COUNTRIES_DATA',
            countryData
          })
        })
    })
  }
})

export default connect(null, mapDispatchToProps)(App);
