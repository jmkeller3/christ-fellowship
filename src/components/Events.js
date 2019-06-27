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
        details: 'Join us for our annual free kids camp in Lehi, UT. This western-themed camp for kids ages 4-10 will provide kids with a place to hear stories from the Bible, play fun games, eat snacks, and hang out with friends (while making new ones!). Come join the posse and help the Reno Kid protect the town against the Bubblegum Bandit! Please click below to register.',
        date: 'July 8-12, 2019',
        fbLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdTwC5Mff7tBAj8K3xNcma1g1BnpU2NZWaMts4ouMfvYcEM1Q/viewform'
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
