import styles from "./ServiceCard.module.css";

const ServiceCard = ({ icon }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default ServiceCard;
