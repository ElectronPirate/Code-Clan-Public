import React, { Component } from "react";

class RestaurantList extends Component {
  render() {
    if (!this.props.items.length) {
      return "No items";
    }

    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

RestaurantList.defaultProps = {
  items: []
};

export default RestaurantList;
