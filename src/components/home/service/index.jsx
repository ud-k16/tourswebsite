import ServiceCard from "../ServiceCard";
import styles from "./Services.module.css";
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiTodoLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { useRef } from "react";
import { Benefits } from "../../../sampledata/sampledata";

const Services = () => {
  const iconset = useRef([
    <PiSuitcaseSimple size={40} />,
    <RiTodoLine size={40} />,
    <GrMoney size={40} />,
    <AiOutlineTeam size={40} />,
  ]).current;
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <p className={styles.headingText}>Why Travel With us?</p>
        <hr></hr>
        XcelTours is the Best Travel Agency in Tamil Nadu and South India, known
        for being one of the leading and most trusted tour and travel agencies.
        We have served thousands of travel enthusiasts with the best
        international group travel packages and customized travel packages,
        along with successful fixed departures.
      </div>
      <div className={styles.cardSection}>
        {Benefits.map((data, index) => (
          <ServiceCard
            icon={iconset[index]}
            description={data.description}
            key={index}
            serviceName={data.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Services;
