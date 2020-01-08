import React from 'react';
import './App.css';
import PizzaSizesContainer from './components/PizzaSizesContainer.js';
import PizzaToppingsContainer from './components/PizzaToppingsContainer.js';
import Address from './components/Address.js';
import NewSizeFormContainer from './components/NewSizeFormContainer.js';
import NewToppingsFormContainer from './components/NewToppingsFormContainer.js';

function App() {
  return (
    <div className="App">
      <h1>Pizza Menu</h1>
      <h2>Pizza Sizes</h2>
      <NewSizeFormContainer />
      <PizzaSizesContainer />
      <h2>Pizza Toppings</h2>
      <NewToppingsFormContainer />
      <PizzaToppingsContainer />
      <Address />
    </div>
  );
}

export default App;
