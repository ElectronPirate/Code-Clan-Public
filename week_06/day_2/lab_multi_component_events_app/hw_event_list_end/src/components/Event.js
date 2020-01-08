import React from 'react';
import './Event.css';

const Event = (props) => {
  return (
    <div className="event-box">
      <p>Name: {props.name}</p>
      <p>Date: {props.date}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default Event;
