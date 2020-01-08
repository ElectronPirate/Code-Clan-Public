import React, { Component } from 'react';

class BreedInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedBreed: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.resetNotFoundMessage();
    this.props.onBreedFormSubmit(this.state.inputtedBreed);
    this.setState({ inputtedBreed: '' });
  }

  handleInputChange(event) {
    this.setState({ inputtedBreed: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          value={this.state.inputtedBreed}
          onChange={this.handleInputChange}
          name="breed"
          id="breed"
        />
        <input type="submit" value="Search" />
      </form>
    )
  }

}

export default BreedInput;
