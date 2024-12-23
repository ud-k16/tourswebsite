import { useEffect, useState } from "react";
import { internationDepartures } from "../../../sampledata/sampledata";
import Carousel from "../../Carousel";
import ReviewCard from "../ReviewCard";
import styles from "./ReviewSection.module.css";

const ReviewSection = () => {
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth > 768 ? 3 : 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingText}>Our Customer's Review</div>
      <hr className={styles.line} color="grey"></hr>
      <div style={{ color: "white" }}>
        Hundreds of our clients have already enjoyed our service and traveled
        the world with our help
      </div>
      <div className={styles.carouselContainer}>
        <Carousel
          settings={settings}
          children={internationDepartures.map((data, index) => (
            <ReviewCard userName={data.name} url={data.url} key={index} />
          ))}
        />
      </div>
    </div>
  );
};
export default ReviewSection;
