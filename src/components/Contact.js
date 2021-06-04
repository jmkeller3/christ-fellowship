import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <main>
        <div className='main'>
          <div id='gathering'>
            <h1>Come Visit with Us</h1>

            <h2>Every Sunday at 11:00 AM</h2>
            <h3 id='meeting'>
              We Currently Meet at I Am Recovery in Lehi, UT at 121 East State
              Street
            </h3>
            <Button
              size='large'
              color='primary'
              variant='contained'
              target='_blank'
              href='https://goo.gl/maps/m8fZgedtGxKsHRwf8'
              style={{ margin: '1rem auto' }}
            >
              Get Directions
            </Button>
          </div>
          <h1>Contact</h1>
          <div id='connect'>
            <h2>Connect with us at the following places</h2>
            <span>
              <a
                href='mailto:timothy@christfellowshipUtah.org'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon size='4x' icon='envelope' />
              </a>
              <a
                href='https://www.facebook.com/christfellowshiplehi/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon size='4x' icon={['fab', 'facebook']} />
              </a>
              <a
                href='https://www.instagram.com/christfellowshiplehi/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon size='4x' icon={['fab', 'instagram']} />
              </a>
            </span>
          </div>
        </div>
      </main>
    )
  }
}
