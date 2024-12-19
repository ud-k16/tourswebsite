import styles from "./ServiceCard.module.css";
import { IoHomeOutline } from "react-icons/io5";

const ServiceCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <IoHomeOutline size={40} />
      </div>
    </div>
  );
};

export default ServiceCard;
