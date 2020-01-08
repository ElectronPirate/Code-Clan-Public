import React, { Component } from 'react';

class NewToppingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: '',
      dimension: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newSize = {
      size: this.state.size,
      dimension: this.state.dimension
    }
    this.props.submitSize(newSize);
    this.setState({
      size: '',
      dimension: 0
    });
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Size Label:
          <input
            type="text"
            name="size"
            id="size"
            value={this.state.size}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Dimension:
          <input
            type="number"
            name="dimension"
            id="dimension"
            value={this.state.dimension}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

};

export default NewToppingsForm;
