import React, { Component } from 'react';

class EventForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(evt) {
    this.setState({name: evt.target.value});
  }

  handleDateChange(evt) {
    this.setState({date: evt.target.value});
  }

  handleDescriptionChange(evt) {
    this.setState({description: evt.target.value});
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newEvent = {
      name: this.state.name,
      date: this.state.date,
      description: this.state.description
    }
    this.props.handleEventSubmit(newEvent);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="date"
          placeholder="date"
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <input
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input type="submit" value="Save Event" />
      </form>
    )
  }

}

export default EventForm;
