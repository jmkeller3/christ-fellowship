import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpeg";

export default class About extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h2>About</h2>

          <section id="abt-church">
            <h3>Christ Fellowship</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </section>
          <section id="abt-elders">
            <h3>The Leaders</h3>
            <div className="elder">
              <h4>Timothy O'Day</h4>
              <div className="img-container">
                <img src={Tim} alt="A portrait of Timothy O'Day" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore accusantium et debitis hic veniam officia fugit ipsa
                eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
                facilis dolorum quas sed libero numquam tempore quibusdam error
                sit? Incidunt dicta laudantium aspernatur quos!
              </p>
            </div>
            <div className="elder">
              <h4>Zach Thompson</h4>
              <div className="img-container">
                <img src={Zach} alt="A portrait of Zach Thompson" />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore accusantium et debitis hic veniam officia fugit ipsa
                eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
                facilis dolorum quas sed libero numquam tempore quibusdam error
                sit? Incidunt dicta laudantium aspernatur quos!
              </p>
            </div>
          </section>
          <section id="abt-location">
            <h3>Lehi, UT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </section>
        </div>
        <div className="sidebar">
          <Sidebar
            links={[
              { text: "About the Church", href: "#abt-church" },
              { text: "About the Elders", href: "#abt-elders" },
              { text: "About Lehi, UT", href: "#abt-location" }
            ]}
          />
        </div>
      </main>
    );
  }
}
