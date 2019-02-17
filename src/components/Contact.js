import React, { Component } from "react";
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
            <h2>Come visit with us</h2>
            <h2>Every Sunday: 10:30 AM</h2>
            <h3 id="meeting">
              We meet in members' homes every week. If you would like the visit,
              feel free to contact us and we will gladly let you know where we
              will be meeting that Sunday.
            </h3>
          </div>
        </div>
      </main>
    );
  }
}
