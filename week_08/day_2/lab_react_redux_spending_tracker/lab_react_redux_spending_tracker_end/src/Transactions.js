import React, { Component } from 'react';
import { connect } from 'react-redux';

class Transactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedAmount: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    this.props.addListItem(this.state.inputtedAmount);
    this.resetForm();
  }

  handleInputChange(evt) {
    this.setState({ inputtedAmount: evt.target.value });
  }

  createListItems() {
    return this.props.transactions.map(item => <li>£{item}</li>);
  }

  resetForm() {
    this.setState({inputtedAmount: 0})
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Add transaction:
            <input
              type="number"
              name="transaction"
              value={this.state.inputtedAmount}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>Transactions List</h2>
        <ol>
          {this.createListItems()}
        </ol>
        <button onClick={this.props.clearList}>Clear List</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListItem: (newItem) => {
      dispatch({
        type: 'ADD_TRANSACTION',
        item: newItem
      })
    },
    clearList: () => {
      dispatch({
        type: 'CLEAR_LIST'
      })
    }
  };
};

const mapStateToProps = (state) => {
  return {
    transactions: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
