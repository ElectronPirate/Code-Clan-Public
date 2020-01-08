import React, { Component } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

class EventListings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventData: []
    }
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleEventSubmit(newEvent) {
    this.setState((prevState) => {
      return { eventData: [...prevState.eventData, newEvent] };
    })
  }

  render() {
    return (
      <>
        <h1>Event Listings</h1>
        <h5>Enter an event</h5>
        <EventForm handleEventSubmit={this.handleEventSubmit} />
        <h3>Events</h3>
        <EventList eventData={this.state.eventData} />
      </>
    )
  }
}

export default EventListings;;
