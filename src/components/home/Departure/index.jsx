import { internationDepartures } from "../../../sampledata/sampledata";
import Carousel from "../../Carousel";
import LocationCard from "../LocationCard";

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
      <Carousel
        settings={settings}
        children={internationDepartures.map((data, index) => (
          <LocationCard locationImage={data.url} name={data.name} key={index} />
        ))}
      />
    </div>
  );
};
export default Departure;
