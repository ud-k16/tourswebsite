import styles from "./Header.module.css";
import LOGO from "../../assests/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={LOGO} alt="xcel-logo" className={styles.logoContainer} />
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
    </header>
  );
};
export default Header;
