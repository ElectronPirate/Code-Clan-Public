import React from "react";

const CustomerList = props => {
  function createListItems() {
    return props.customers.map((customer, i) => {
      return <li key={i}>{customer.first_name}</li>;
    });
  }

  return <ul>{createListItems()}</ul>;
};

export default CustomerList;
