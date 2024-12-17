import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="" alt="xcel-logo" />
      <nav>
        <ul>
          <a href="/">Home</a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
