import React, { Component } from "react";
import InputArea from "./InputArea";
import RestaurantList from "./RestaurantList";

class RestaurantListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(name) {
    this.setState({
      restaurants: [].concat(this.state.restaurants).concat([name])
    });
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <RestaurantList items={this.state.restaurants} />
      </div>
    );
  }
}

export default RestaurantListContainer;
