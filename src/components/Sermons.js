import React, { Component } from "react";

import "./Sermons.css";

import sermon from "../sermons/Test.m4a";

const audio1 = new Audio(sermon);

export default class Sermons extends Component {
  render() {
    console.log(audio1);
    return (
      <main id="sermons">
        <div className="sermon-browser">
          <audio controls src={sermon} />
        </div>
      </main>
    );
  }
}
