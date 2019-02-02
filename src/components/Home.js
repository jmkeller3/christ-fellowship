import React, { Component } from "react";
import Logo from "../img/Logo.svg";
import Button from "@material-ui/core/Button";
import BG from "../img/Prayer.jpg";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <main id="home">
        <section
          style={{
            backgroundImage: `url(${BG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.8
          }}
          id="hero"
        >
          <img src={Logo} alt="Christ Fellowship Church Logo" />
        </section>
        <section className="info" id="gathering-info">
          <h3>Weekly Gathering</h3>
          <p>
            We gather every Sunday to celebrate the resurrection of Jesus and
            the life that we have through the gospel. Click below for more
            infomation.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/about/#abt-expect"
          >
            Weekly Gathering
          </Button>
        </section>
        <section className="info" id="mission-info">
          <h3>Mission Statement</h3>
          <p>
            Our purpose is to glorify God by multiplying, gathering, and
            equiping disciples of Jesus Christ through the power of the Holy
            Spirit.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/about/#abt-church"
          >
            More Information
          </Button>
        </section>
        <section className="info" id="giving-info">
          <h3>Giving</h3>
          <p>
            If you want to support our ministry, you can give when we gather
            together every Sunday or online through the link below.
          </p>
          <Button
            variant="contained"
            color="primary"
            href="https://tithe.ly/give_new/www/#/tithely/give-one-time/567613"
            target="_blank"
            size="large"
          >
            Give
          </Button>
        </section>
      </main>
    );
  }
}
