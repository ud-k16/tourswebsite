import { useEffect, useState } from "react";
import { AwardsReceived } from "../../../sampledata/sampledata";
import Carousel from "../../Carousel";
import styles from "./Awards.module.css";

const Awards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: windowWidth > 768 ? 5 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div>
      <Carousel
        settings={settings}
        children={AwardsReceived.map((data, index) => (
          <div key={index} className={styles.container}>
            <img src={data.url} className={styles.imgContainer} />
            <div>{data.name}</div>
          </div>
        ))}
      />
    </div>
  );
};
export default Awards;
