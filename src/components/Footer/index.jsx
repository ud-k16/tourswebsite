import { Branches } from "../../sampledata/sampledata";
import styles from "./Footer.module.css";
import { TiMessages } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

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
      <div>
        <div className={styles.headingText}>Branches</div>
        <div className={styles.locationContainer}>
          {Branches.map((data, index) => (
            <div className={styles.locationCard} key={index}>
              <FaLocationDot size={40} />
              <div>{data.city}</div>
              <div>{data.address}</div>
              <div>{data.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
