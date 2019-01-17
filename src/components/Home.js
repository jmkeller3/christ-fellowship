import React, { Component } from "react";
import Show from "./Show";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <main id="home">
        <section id="slideshow">
          <Show />
        </section>
        <section className="info" id="gathering-info">
          <h3>Weekly Gathering</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium et debitis hic veniam officia fugit ipsa eius quos, ab
            voluptate voluptatibus sunt aliquid necessitatibus facilis dolorum
            quas sed libero numquam tempore quibusdam error sit? Incidunt dicta
            laudantium aspernatur quos!
          </p>
        </section>
        <section className="info" id="mission-info">
          <h3>Mission Statement</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium et debitis hic veniam officia fugit ipsa eius quos, ab
            voluptate voluptatibus sunt aliquid necessitatibus facilis dolorum
            quas sed libero numquam tempore quibusdam error sit? Incidunt dicta
            laudantium aspernatur quos!
          </p>
        </section>
        <section className="info" id="giving-info">
          <h3>Giving</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium et debitis hic veniam officia fugit ipsa eius quos, ab
            voluptate voluptatibus sunt aliquid necessitatibus facilis dolorum
            quas sed libero numquam tempore quibusdam error sit? Incidunt dicta
            laudantium aspernatur quos!
          </p>
        </section>
      </main>
    );
  }
}
