import styles from "./Header.module.css";
import LOGO from "../../assests/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { TbLogin2 } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
        <>
          {!isOpen && <FiMenu onClick={toggleDrawer} size={60} />}
          <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
            <nav className={styles.drawerItemContainer}>
              <div className={styles.drawerItem}>
                <IoHomeOutline size={40} />
                <a href="/" className={styles.linkText}>
                  Home
                </a>
              </div>
              <div className={styles.drawerItem}>
                <IoMdInformationCircleOutline size={40} />
                <a href="/about" className={styles.linkText}>
                  About
                </a>
              </div>
              <div className={styles.drawerItem}>
                <TbLogin2 size={40} />
                <a href="/blog" className={styles.linkText}>
                  Blog
                </a>
              </div>
              <div className={styles.drawerItem}>
                <GrGallery size={40} />
                <a href="/gallery" className={styles.linkText}>
                  Gallery
                </a>
              </div>
              <div className={styles.drawerItem}>
                <GrContact size={40} />
                <a href="/contact" className={styles.linkText}>
                  Contact
                </a>
              </div>
            </nav>
          </Drawer>
        </>
      )}
    </header>
  );
};
export default Header;
