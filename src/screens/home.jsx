import Header from "../components/Header";
import FloatingWhatsappButton from "../components/Header";
import EnquiryButton from "../components/Header";
import FeaturedLocation from "../components/Header";
import Services from "../components/Header";
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
