import { Branches } from "../../sampledata/sampledata";
import styles from "./Footer.module.css";
import { TiMessages } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.socialLinkContainer}>
        <div className={styles.iconContainer}>
          <CiFacebook size={20} color="white" />
        </div>
        <div className={styles.iconContainer}>
          <FaInstagram size={20} color="white" />
        </div>
        <div className={styles.iconContainer}>
          <RiTwitterXFill size={20} color="white" />
        </div>
        <div className={styles.iconContainer}>
          <CiLinkedin size={20} color="white" />
        </div>
        <div className={styles.iconContainer}>
          <FaPinterestP size={20} color="white" />
        </div>
        <div className={styles.iconContainer}>
          <TbBrandYoutube size={20} color="white" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
