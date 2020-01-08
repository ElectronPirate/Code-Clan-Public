import React, { Component } from "react";

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errorMessage: ""
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setText(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    if (!this.state.text.length) {
      this.setState({
        errorMessage: "Please enter a restaurant"
      });
    } else {
      this.setState({
        errorMessage: ""
      });
      this.props.onSubmit(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <input
          aria-label="restaurant-input"
          value={this.state.text}
          onChange={this.setText}
        />
        <button onClick={this.handleClick}>Add</button>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default InputArea;
