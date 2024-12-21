import styles from "./MessageForm.module.css";

const MessageForm = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Enquire Now</div>
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
        />

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
      </div>
    </div>
  );
};
export default MessageForm;
