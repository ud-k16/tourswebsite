import Carousel from "../Carousel";
import styles from "./FeaturedLocation.module.css";

const FeaturedLocation = ({ featuredTour }) => {
  return (
    <Carousel>
      {featuredTour.map((data, index) => (
        <div className={styles.container} key={index}>
          <div
            alt="Image"
            style={{ backgroundImage: `url(${data.url})` }}
            className={styles.imageContainer}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default FeaturedLocation;
