import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import CustomerListContainer from "./components/CustomerListContainer";

class App extends Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return (
      <>
        <h1 id="title">Customers</h1>
        <CustomerListContainer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(() => {
      fetch("http://localhost:3000/api/customers")
        .then(res => res.json())
        .then(customers => {
          return dispatch({
            type: "SET_CUSTOMER_DATA",
            customers
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
