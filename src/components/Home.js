import React, { Component } from "react";
import Show from "./Show";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section id="home">
          <h2>Home</h2>
        </section>
        <section id="slideshow">
          <Show />
        </section>
      </main>
    );
  }
}
