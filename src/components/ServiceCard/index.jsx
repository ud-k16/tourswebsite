import styles from "./ServiceCard.module.css";
import { IoHomeOutline } from "react-icons/io5";

const ServiceCard = ({ icon }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default ServiceCard;
