import styles from "./Header.module.css";
import LOGO from "../../assests/logo.png";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className={styles.header}>
      <img src={LOGO} alt="xcel-logo" className={styles.logoContainer} />
      {windowWidth > 768 ? (
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
        </nav>
      ) : (
        <FiMenu size={60} />
      )}
    </header>
  );
};
export default Header;
