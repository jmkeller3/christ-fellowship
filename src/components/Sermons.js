import React, { Component } from "react";

import "./Sermons.css";

export default class Sermons extends Component {
  render() {
    return (
      <main id="sermons">
        <div className="sermon-browser">
          <iframe
            tabIndex="-1"
            width="1"
            height="540"
            src="https://embed.sermonaudio.com/browser/broadcaster/gbccapecoral/speaker/tom%20ascol/?sort=newest&page_size=10&style=compact&footer=false&filters=false"
            style={{ minWidth: "100%", maxWidth: "100%" }}
            allow="autoplay"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </main>
    );
  }
}
