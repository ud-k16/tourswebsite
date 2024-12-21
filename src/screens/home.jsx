import Header from "../components/Header";
import FloatingWhatsappButton from "../components/WhatsAppButton";
import EnquiryButton from "../components/Enquiry";
import FeaturedLocation from "../components/home/FeaturedLocation";
import Services from "../components/home/service";
import { featuredTour } from "../sampledata/sampledata";
import Achievements from "../components/home/Achievements";
import Departure from "../components/home/Departure";

const Home = () => {
  return (
    <div>
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton />
      <FeaturedLocation featuredTour={featuredTour} />
      <Services />
      <Achievements />
      <Departure />
    </div>
  );
};
export default Home;
