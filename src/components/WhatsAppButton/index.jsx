// src/FloatingWhatsappButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

const FloatingWhatsappButton = () => {
  const phoneNumber = "+919942766494";

  const handleClick = () => {
    // Open WhatsApp chat with your phone number
    window.open(`https://wa.me/${phoneNumber}`);
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <FaWhatsapp size={60} color="#25D366" />
    </div>
  );
};

export default FloatingWhatsappButton;
