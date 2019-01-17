import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Pic1 from "../img/Summer.jpg";
import Pic2 from "../img/Logo.svg";
import Pic3 from "../img/Church.jpg";
import Pic6 from "../img/POS_2.jpg";
import Pic7 from "../img/Summer_Blue.JPEG";

export default class Show extends Component {
  render() {
    return (
      <Carousel
        heightMode="first"
        slideWidth="500px"
        slidesToShow={1}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={5000}
        //cellSpacing={50}
        dragging={false}
        framePadding="10"
        // initialSlideHeight={200}
        transitionMode="fade"
        withoutControls={true}
      >
        <img src={Pic1} alt="" />
        <img src={Pic2} alt="Logo" />
        <img src={Pic3} alt="" />
        {/* <img src={Pic4} alt="" /> */}
        {/* <img src={Pic5} alt="" /> */}
        <img src={Pic6} alt="" />
        <img src={Pic7} alt="" />
        {/* <img src={Pic8} alt="" /> */}
      </Carousel>
    );
  }
}
