import styles from "./ReviewCard.module.css";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ userName = "", url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>
          {url ? (
            <img src={url} className={styles.imgContainer} />
          ) : (
            userName.charAt(0)
          )}
        </div>
        <div className={styles.userName}>Pankaj</div>
        <div>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={() => {}}
          />
        </div>

        <div className={styles.date}>Dec 26,2023</div>
        <div className={styles.reviewText}>
          we booked a trip to thailanf annd it is the best in the world no
          matter what . life has to be appreoached positively
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
