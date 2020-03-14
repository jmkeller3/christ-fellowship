import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h1>Contact</h1>
          <div id="connect">
            <h2>Connect with us at the following places</h2>
            <span>
              <a href="mailto:timothy@christfellowshipUtah.org" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon size="4x" icon="envelope" />
</a>
              <a
                href="https://www.facebook.com/christfellowshiplehi/"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="4x" icon={["fab", "facebook"]} />
              </a>
              <a
                href="https://www.instagram.com/christfellowshiplehi/"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon size="4x" icon={["fab", "instagram"]} />
              </a>
            </span>
          </div>
          <div id="gathering">
           
            <h1 className="urgent">
                  Due to Covid-19, we will no longer be gathering corporately. For more information and updates, please click the link below.
            </h1>

              <Button
              size="large" id="urgent-btn" variant='contained' target="_blank" href="https://www.facebook.com/christfellowshiplehi/photos/a.636612417157495/636607330491337/?type=3&theater" style={{margin: 'auto'}} >
               See Updates
              </Button> 

            {/* 
             <h2>Come visit with us</h2>
            <h2>Every Sunday at 11:00 AM</h2>
            <h3 id="meeting">
              We Currently Meet at the Hyatt Place in Lehi, UT at 3700 N Outlet Pkwy
            </h3>
            <Button
              size="large" color='primary' variant='contained' target="_blank" href="https://goo.gl/maps/E9PjHywy1htuDAiG9" style={{margin: 'auto'}} >
               Get Directions
              </Button> */}
          </div>
        </div>
      </main>
    );
  }
}
