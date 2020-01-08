import React, { Component } from 'react';
import './AnimalForm.css';

class AnimalForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      species: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newAnimal = {
      name: evt.target.name.value,
      age: evt.target.age.value,
      species: evt.target.species.value
    }
    this.props.addAnimal(newAnimal);
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      age: '',
      species: ''
    });
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit.bind(this) }>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          name='age'
          id='age'
          value={this.state.age}
          onChange={this.handleInputChange}
        />

        <label htmlFor='species'>Species:</label>
        <select
          name='species'
          id='species'
          value={this.state.species}
          onChange={this.handleInputChange}
        >
          <option value='Cat'>Cat</option>
          <option value='Dog'>Dog</option>
        </select>

        <input type='submit' value='Add Animal' />
      </form>
    );
  }

};

export default AnimalForm;
