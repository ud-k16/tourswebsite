import styles from "./ReviewCard.module.css";

const ReviewCard = ({ userName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>M</div>
        <div className={styles.serviceName}>{userName}</div>
      </div>
    </div>
  );
};
export default ReviewCard;
