import React, { Component } from 'react';

class CategorySelect extends Component {

  constructor(props) {
    super(props)

    this.state = {
      category: 'All'
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  createOptions() {
    return this.props.categories.map((category, index) => {
      return <option value={ category } key={ index }>{ category }</option>
    })
  }

  handleFilterChange(event) {
    this.setState({category: event.target.value});
    this.props.categorySelected(event.target.value);
  }

  render() {
    return (
      <>
        <label htmlFor="category">Filter: </label>
        <select onChange={ this.handleFilterChange }name="category" id="category">
          <option value="All">All</option>
          { this.createOptions() }
        </select>
      </>
    )
  }

}

export default CategorySelect;
