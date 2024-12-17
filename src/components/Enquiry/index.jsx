import React from "react";

import styles from "./Enquiry.module.css";

const EnquiryButton = () => {
  const handleClick = () => {};

  return (
    <div className={styles.EnquiryButton} onClick={handleClick}>
      <p className={styles.EnquiryButtonText}>Enquire Now</p>
    </div>
  );
};

export default EnquiryButton;
