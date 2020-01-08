import React from 'react';
import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <h1>Dice</h1>
      <Dice sides={8}/>
    </div>
  );
}

export default App;
