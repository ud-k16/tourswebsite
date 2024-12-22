import { CountryList } from "../../../sampledata/sampledata";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.titleText}>We are Sky Planet Holidays</div>
        <div>
          Sky Planet Holidays is a leading worldwide tour operator, dedicated to
          providing exceptional travel experiences tailored to our customers’
          interests. Accredited by IATA and the Travel Agent Federation of
          India, we uphold the highest standards of service and professionalism.
          With decades of experience, we’ve set the standard for group tours
          globally, earning recognition for excellence and reliability. Our
          commitment to customer satisfaction has earned us accolades from
          clients and partners, propelling us forward in the world of travel.
        </div>
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
export default Contact;
