import React, { Component } from 'react';
import {Typography} from "@material-ui/core"
import Event from './Event'

// const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const today = new Date()

const upcomingEvents = [
    // {
    //     title: 'Free Community Cookout',
    //     details: 'Come get some free food and meet your neighbors! The location will be Olympic Park in Lehi, UT. Starts at 5:00 PM and will last until about 7:30 PM. Click below for more details',
    //     date: 'Friday, June 7, 2019',
    //     fbLink: 'https://www.facebook.com/events/2102363126721691/'
    // },
    {
        title: 'Free Summer Camp',
        details: 'Join us for our annual free kids camp in Lehi, UT. Come play games, sing songs, and have fun!',
        date: 'July 8-12, 2019',
        fbLink: 'https://www.facebook.com/events/2357023890994696/'
    }
]

export default class Events extends Component {
    
  
    render() {
    const newEvents = upcomingEvents.map((event) => 
        <Event title={event.title} details={event.details} date={event.date} link={event.fbLink} />
    )
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#93cbab'}}>
      <Typography gutterBottom={true} component="h2" variant="h2" style={{margin: '10px', color: '#fff'}}>Upcoming Events</Typography>
        {newEvents}
      </div>
    )
  }
}
