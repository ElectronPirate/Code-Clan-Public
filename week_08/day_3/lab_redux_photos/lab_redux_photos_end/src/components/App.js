import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar.js';
import PhotoListContainer from './PhotoListContainer.js';
import PhotoListLikedContainer from './PhotoListLikedContainer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route path="/photos" component={PhotoListContainer} />
          <Route path="/liked" component={PhotoListLikedContainer} />
        </>
      </Router>
    );
  }
}

export default App;
