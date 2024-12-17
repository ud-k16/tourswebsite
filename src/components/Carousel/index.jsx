import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    arrows: true, // Show arrows for navigation
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/600x300?text=Image+1"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x300?text=Image+2"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x300?text=Image+3"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
