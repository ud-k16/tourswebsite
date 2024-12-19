import ServiceCard from "../ServiceCard";
import styles from "./Services.module.css";
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiTodoLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <p className={styles.headingText}>Why Travel With us?</p>
        <hr></hr>
        Skyplanet Holidays is the Best Travel Agency in Tamil Nadu and South
        India, known for being one of the leading and most trusted tour and
        travel agencies. We have served thousands of travel enthusiasts with the
        best international group travel packages and customized travel packages,
        along with successful fixed departures.
      </div>
      <div className={styles.cardSection}>
        <ServiceCard icon={<PiSuitcaseSimple size={40} />} />
        <ServiceCard icon={<RiTodoLine size={40} />} />
        <ServiceCard icon={<GrMoney size={40} />} />
        <ServiceCard icon={<AiOutlineTeam size={40} />} />
      </div>
    </div>
  );
};
export default Services;
