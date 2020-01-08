import React, { Component } from 'react';

class NewToppingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedTopping: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({inputtedTopping: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.setState({inputtedTopping: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Topping:
          <input
            type="text"
            name="topping"
            value={this.state.inputtedTopping}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

};

export default NewToppingsForm;
