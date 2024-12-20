import styles from "./ServiceCard.module.css";

const ServiceCard = ({ icon, serviceName = "", description = "" }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.serviceName}>{serviceName}</div>
      <div className={styles.serviceDescription}>{description}</div>
    </div>
  );
};

export default ServiceCard;
