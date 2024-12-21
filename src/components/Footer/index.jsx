import styles from "./Footer.module.css";
import { TiMessages } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className={styles.notificationSection}>
        <TiMessages size={70} />
        <div>
          <div className={styles.titleTextStyle}>Get Updates & More</div>
          <div className={styles.subtitleTextStyle}>
            Thoughtful Thoughts to your chats
          </div>
        </div>
        <div className={styles.buttonStyle}>join Now</div>
      </div>
    </div>
  );
};
export default Footer;
