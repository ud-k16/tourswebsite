import Carousel from "../../Carousel";

const Departure = () => {
  const settings = {
    dots: false, // Display navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    arrows: false, // Show arrows for navigation
  };
  return (
    <div>
      <div>International depature</div>
      <hr></hr>
      <Carousel settings={settings} />
    </div>
  );
};
export default Departure;
