import React, { Component } from 'react';
import BucketListItem from './BucketListItem.js';
import './BucketList.css';

class BucketList extends Component {

  constructor() {
    super();
    this.createListItems = this.createListItems.bind(this);
    this.visitedStatusChange = this.visitedStatusChange.bind(this);
  }

  createListItems() {
    return this.props.bucketList.map(country => {
      return (
        <BucketListItem
          key={ country.name }
          country={ country }
          onCheck={ this.visitedStatusChange }
        />
      );
    });
  }

  visitedStatusChange(evt) {
    this.props.visitedStatusChange(evt.target.id);
  }

  render() {
    if (this.props.bucketList.length === 0) {
      return <h5>Nothing in your list</h5>
    } else {
      return <ul className="bucketlist">{ this.createListItems() }</ul>
    }
  }

}

export default BucketList;
