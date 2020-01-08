import React, { Component } from 'react';
import Country from '../components/Country';
import CountriesSelect from '../components/CountriesSelect';

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countriesData: [
          {
            "name": "Afghanistan",
            "region": "Asia",
            "population": 27657145,
          },
          {
            "name": "Åland Islands",
            "region": "Europe",
            "population": 28875,
          },
          {
            "name": "Albania",
            "region": "Europe",
            "population": 2886026,
          }
        ],
      selectedIndex: null
    };
    this.handleSelectedCountry = this.handleSelectedCountry.bind(this);
  }

  handleSelectedCountry(index) {
    this.setState({selectedIndex: index});
  }

  createCountry() {
    if (this.state.selectedIndex) {
      return <Country country={this.state.countriesData[this.state.selectedIndex]} />
    } else {
      return <h4>Select a country</h4>
    }
  }

  render() {
    return (
      <>
        <h1>Countries of the World</h1>
        <CountriesSelect
          countriesData={this.state.countriesData}
          handleSelectedCountry={this.handleSelectedCountry}
        />
        {this.createCountry()}
      </>
    )
  }
}

export default Countries;
