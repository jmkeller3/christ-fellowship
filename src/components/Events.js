import React, { Component } from 'react';
import Event from './Event'

const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date()

const upcomingEvents = [
    {
        title: 'Test',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tortor in risus ullamcorper commodo. Curabitur convallis tellus ligula, et commodo dui pretium nec. Integer sed mi vitae neque efficitur suscipit. Vestibulum varius purus sapien, et gravida risus vulputate quis. Pellentesque nec mi a ligula vestibulum vestibulum vitae vitae velit.',
        date: today.toLocaleDateString("en-US", dateOptions)
    },
    {
        title: 'Summer Camp',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tortor in risus ullamcorper commodo. Curabitur convallis tellus ligula, et commodo dui pretium nec. Integer sed mi vitae neque efficitur suscipit. Vestibulum varius purus sapien, et gravida risus vulputate quis. Pellentesque nec mi a ligula vestibulum vestibulum vitae vitae velit.',
        date: today.toLocaleDateString("en-US", dateOptions)
    }
]

export default class Events extends Component {
    
  
    render() {
    const newEvents = upcomingEvents.map((event) => 
        <Event title={event.title} details={event.details} date={event.date} />
    )
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#93cbab'}}>
      <h1>Upcoming Events</h1>
        {newEvents}
      </div>
    )
  }
}
