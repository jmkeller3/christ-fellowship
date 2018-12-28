import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpg";

export default class About extends Component {
  render() {
    return (
      <main>
        <div className="main">
          <h2>About</h2>

          <div id="abt-church">
            <h3>Christ Fellowship</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </div>
          <div id="abt-elders">
            <h3>The Leaders</h3>
            <div className="elder">
              <h4>Timothy O'Day</h4>
              <img src={Tim} alt="A portrait of Timothy O'Day" />

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
              <img src={Zach} alt="A portrait of Zach Thompson" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore accusantium et debitis hic veniam officia fugit ipsa
                eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
                facilis dolorum quas sed libero numquam tempore quibusdam error
                sit? Incidunt dicta laudantium aspernatur quos!
              </p>
            </div>
          </div>
          <div id="abt-location">
            <h3>Lehi, UT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </div>
        </div>
        <div className="sidebar">
          <Sidebar
            links={["About the Church", "About the Elders", "About Lehi, UT"]}
          />
        </div>
      </main>
    );
  }
}
