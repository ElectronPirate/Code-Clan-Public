import React, { Component } from 'react';

class CountriesSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(evt) {
    this.setState({selectedIndex: evt.target.value});
    this.props.handleSelectedCountry(evt.target.value);
  }

  createOptions() {
    return this.props.countriesData.map((country, index) => {
      return <option value={index} key={index}>{country.name}</option>
    });
  }

  render() {
    return (
      <select value={this.state.selectedIndex} onChange={this.handleSelectChange}>
        {this.createOptions()}
      </select>
    )
  }

}

export default CountriesSelect;
