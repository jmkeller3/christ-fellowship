import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpg";

export default class Show extends Component {
  render() {
    return (
      <Carousel slideWidth="500px">
        <img src={Tim} alt="Tim" />
        <img src={Zach} alt="Zach" />
        <img src={Tim} alt="Tim" />
      </Carousel>
    );
  }
}
