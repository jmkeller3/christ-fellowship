import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Pic1 from "../img/Summer.jpg";
import Pic2 from "../img/Prayer.jpg";
import Pic3 from "../img/Church.jpg";
import Pic4 from "../img/Church_Kids.jpg";
import Pic5 from "../img/POS_1.jpg";
import Pic6 from "../img/POS_2.jpg";
import Pic7 from "../img/Summer_Blue.JPEG";
import Pic8 from "../img/Summer_Kids.jpg";

export default class Show extends Component {
  render() {
    return (
      <Carousel
        slideWidth="500px"
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
        <img src={Pic1} alt="" />
        <img src={Pic2} alt="" />
        <img src={Pic3} alt="" />
        <img src={Pic4} alt="" />
        <img src={Pic5} alt="" />
        <img src={Pic6} alt="" />
        <img src={Pic7} alt="" />
        <img src={Pic8} alt="" />
      </Carousel>
    );
  }
}
