import { useEffect, useState } from "react";
import { internationDepartures } from "../../../sampledata/sampledata";
import Carousel from "../../Carousel";
import LocationCard from "../LocationCard";
import styles from "./FixedDeparture.module.css";

const FixedDeparture = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: false, // Display navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: windowWidth > 768 ? 3 : 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    arrows: false, // Show arrows for navigation
  };
  return (
    <div className={styles.container}>
      <div className={styles.headingText}>Fixed Depatures</div>
      <hr className={styles.line} color="grey"></hr>
      <div className={styles.carouselContainer}>
        <Carousel
          settings={settings}
          children={internationDepartures.map((data, index) => (
            <LocationCard
              locationImage={data.url}
              name={data.name}
              key={index}
            />
          ))}
        />
      </div>
    </div>
  );
};
export default FixedDeparture;
