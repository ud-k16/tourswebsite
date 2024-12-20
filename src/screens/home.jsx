import Header from "../components/Header";
import FloatingWhatsappButton from "../components/WhatsAppButton";
import EnquiryButton from "../components/Enquiry";
import FeaturedLocation from "../components/home/FeaturedLocation";
import Services from "../components/home/service";
import { featuredTour } from "../sampledata/sampledata";

const Home = () => {
  return (
    <div>
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton />
      <FeaturedLocation featuredTour={featuredTour} />
      <Services />
    </div>
  );
};
export default Home;
