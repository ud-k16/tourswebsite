import { CountryList } from "../../../sampledata/sampledata";
import styles from "./MessageForm.module.css";
import { IoCloseSharp } from "react-icons/io5";

const MessageForm = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Enquire Now</div>
        <IoCloseSharp
          size={20}
          onClick={closeModal}
          className={styles.closeButton}
        />
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
        />
        <div className={styles.phoneContainer}>
          <select className={styles.countryContainer}>
            {CountryList.map((data, index) => (
              <option key={index}>
                <img src={data.flag} className={styles.imgContainer} />
                <div>{data.code}</div>
              </option>
            ))}
          </select>

          <input
            type="number"
            name="name"
            className={styles.input}
            style={{
              width: "80%",
            }}
            placeholder="WhatsApp / Phone Number"
          />
        </div>
        <input
          type="email"
          name="name"
          className={styles.input}
          placeholder="Email"
        />
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Travel Destination"
        />
        <input
          type="date"
          name="name"
          className={styles.input}
          placeholder="Date of Travel"
        />
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="No of People"
        />
        <div className={styles.sendButton}>SEND MESSAGE</div>
      </div>
    </div>
  );
};
export default MessageForm;
