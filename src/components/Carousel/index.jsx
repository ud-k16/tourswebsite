import React from "react";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";

const Carousel = ({
  children,
  settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    arrows: true, // Show arrows for navigation
  },
}) => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
