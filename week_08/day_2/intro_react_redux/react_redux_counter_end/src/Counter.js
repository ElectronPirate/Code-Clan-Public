import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <>
      <h1>Counter</h1>
      <h3>{props.total}</h3>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    total: state
  }
};

const mapDispatchToProps = dispatch => { // NEW
  return {
    increment: () =>
      dispatch({
        type: 'INCREMENT'
      }),
    decrement: () =>
      dispatch({
        type: 'DECREMENT'
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
