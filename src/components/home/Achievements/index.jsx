import { useEffect, useRef, useState } from "react";
import styles from "./Achievements.module.css";

const Achievements = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const targetCount = 100;

  // State to store whether the input is focused or not
  const [isFocused, setIsFocused] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFocused(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isFocused) {
      // Function to gradually increase the count
      let start = 0;
      interval = setInterval(() => {
        if (start < targetCount) {
          start += 1;
          setCustomerCount(start);
        } else {
          // Stop when the target is reached
          clearInterval(interval);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isFocused]);
  return (
    <div className={styles.container} ref={componentRef}>
      <div className={styles.section}>
        <div className={styles.count}>{customerCount * 15}+</div>
        <div className={styles.title}>{"Happy Customers"}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.count}>{customerCount}+</div>
        <div className={styles.title}>{"Countries"}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.count}>{customerCount * 8}+</div>
        <div className={styles.title}>{"Destination"}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.count}>{customerCount * 3} +</div>
        <div className={styles.title}>{"Tours Completed"}</div>
      </div>
    </div>
  );
};
export default Achievements;
