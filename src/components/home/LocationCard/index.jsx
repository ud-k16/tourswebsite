import styles from "./LocationCard.module.css";

const LocationCard = ({ locationImage, name }) => {
  return (
    <div className={styles.container}>
      <div
        alt="Image"
        style={{ backgroundImage: `url(${locationImage})` }}
        className={styles.imageContainer}
      >
        <div className={styles.locationText}>{name}</div>
      </div>
      <div className={styles.action}>
        <div className={styles.buttonStyle} style={{ background: "#230477" }}>
          More Info
        </div>
        <div className={styles.buttonStyle} style={{ color: "#230477" }}>
          Enquiry Now
        </div>
      </div>
    </div>
  );
};
export default LocationCard;
