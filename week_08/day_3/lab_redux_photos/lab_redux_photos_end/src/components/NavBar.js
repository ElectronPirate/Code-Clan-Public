import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <ul id="nav">
      <li>
        <NavLink to="/photos" activeClassName="active-nav">Photos</NavLink>
      </li>
      <li>
        <NavLink to="/liked" activeClassName="active-nav">Liked</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;
