import React from 'react';
import BreedInputContainer from './BreedInputContainer.js';
import PhotoListContainer from './PhotoListContainer.js';
import MessageContainer from './MessageContainer.js';

const App = (props) => {
  return (
    <>
      <h1>Dogs Dogs Dogs!</h1>
      <BreedInputContainer />
      <MessageContainer />
      <PhotoListContainer />
    </>
  );
};

export default App;
