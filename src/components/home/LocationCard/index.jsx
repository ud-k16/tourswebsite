import styles from "./LocationCard.module.css";

const LocationCard = ({ locationImage, name }) => {
  return (
    <div>
      <div alt="Image" style={{ backgroundImage: `url(${locationImage})` }}>
        <div>{name}</div>
      </div>
      <div className={styles.action}>
        <div className={styles.buttonStyle}>
          <p style={{ margin: 0 }}>View More</p>
        </div>
        <div className={styles.buttonStyle} style={{ background: "#230477" }}>
          <p style={{ margin: 0 }}>Book Now</p>
        </div>
      </div>
    </div>
  );
};
export default LocationCard;
