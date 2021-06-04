import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import Event from './Event'

// const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const today = new Date()

const upcomingEvents = [
  // {
  //     title: 'Free Community Cookout',
  //     details: 'Come get some free food and meet your neighbors! The location will be Olympic Park in Lehi, UT. Starts at 5:00 PM and will last until about 7:30 PM. More details to come!',

  //     date: 'Friday, June 12, 2020',
  //     fbLink: '#'
  // },
  {
    title: 'Free Summer Camp',
    details:
      'Hear ye! Hear ye! This free medieval themed camp for kids will provide a place for kids to hear stories from the Bible, play fun games, eat snacks, and make new friends. Come join the knights and princesses as they journey to learn more about the Word of God. Huzzah! The location will be Olympic Park in Lehi, UT (2700 W Parkside Dr, Lehi, UT 84043) and will take place 9:00AM-12:00PM July 12 through July 16',
    // Come join the posse and help the Reno Kid protect the town against the Bubblegum Bandit! Please click below to register.'
    date: 'July 12-16, 2021',
    fbLink: 'https://fb.me/e/28HOhN65o/',
  },
]

export default class Events extends Component {
  render() {
    const newEvents = upcomingEvents.map((event) => (
      <Event
        title={event.title}
        details={event.details}
        date={event.date}
        link={event.fbLink}
      />
    ))
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#93cbab',
        }}
      >
        <Typography
          gutterBottom={true}
          component='h2'
          variant='h2'
          style={{ margin: '10px', color: '#fff' }}
        >
          Upcoming Events
        </Typography>
        {newEvents}
      </div>
    )
  }
}
