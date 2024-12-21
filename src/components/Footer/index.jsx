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
      <div>
        <nav className={styles.actionContainer}>
          <a href="/" className={styles.linkText}>
            Home
          </a>
          <a href="/about" className={styles.linkText}>
            About
          </a>
          <a href="/blog" className={styles.linkText}>
            Blog
          </a>
          <a href="/gallery" className={styles.linkText}>
            Gallery
          </a>
          <a href="/contact" className={styles.linkText}>
            Contact
          </a>
          <a href="/privacy-policy" className={styles.linkText}>
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Footer;
