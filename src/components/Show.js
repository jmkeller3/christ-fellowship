import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpeg";

export default class Show extends Component {
  render() {
    return (
      <Carousel
        slideWidth="300px"
        slidesToShow={1}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={5000}
        //cellSpacing={50}
        dragging={false}
        framePadding="10"
        heightMode="max"
        transitionMode="fade"
        withoutControls={true}
      >
        <img src={Tim} alt="Tim" />
        <img src={Zach} alt="Zach" />
        <img src={Tim} alt="Tim" />
        <img src={Zach} alt="Zach" />
      </Carousel>
    );
  }
}
