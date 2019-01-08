import React, { Component } from "react";
import Show from "./Show";
import Button from "@material-ui/core/Button";

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
        <Button variant="contained" color="primary">
          Hello There
        </Button>
      </main>
    );
  }
}
