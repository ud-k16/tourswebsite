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
            <p className={styles.locationText}>{data.to}</p>
            <p className={styles.agencyName}>
              XcelTours Best Travel Agency in South India
            </p>

            <div className={styles.detailContainer}>
              <div>
                <p style={{ margin: 0 }}>{data.nights} Nights</p>
                <p style={{ margin: 0 }}>{data.days} days</p>
              </div>

              <div className={styles.verticalLine} />
              <div>
                <p style={{ margin: 0, fontSize: 16 }}>
                  Signature Departure Starts from
                </p>
                <p style={{ margin: 0 }}>Rs. {data.package}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default FeaturedLocation;
