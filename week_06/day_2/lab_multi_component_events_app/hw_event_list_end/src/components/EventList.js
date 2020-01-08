import React from 'react';
import Event from './Event';
import './EventList.css';

const EventList = (props) => {
  const events = props.eventData.map((event, index) => {
    return (
      <Event
        name={event.name}
        date={event.date}
        description={event.description}
        key={index}
      />
    )
  })

  return (
    <div id="event-list">
      {events}
    </div>
  )
}

export default EventList;
