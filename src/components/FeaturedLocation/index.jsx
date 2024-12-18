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
          >
            <p>{data.to}</p>
            <p>XcelTours Best Travel Agency in South India</p>
            <div className={styles.detailContainer}>
              <div>
                <p>{data.nights} Nights</p>
                <p>{data.days} days</p>
              </div>

              <div className={styles.verticalLine} />
              <div>
                <p>Signature Departure Starts from</p>
                <p> {data.package}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default FeaturedLocation;
