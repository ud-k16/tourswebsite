import "./App.css";
import Header from "./components/Header";
import FloatingWhatsappButton from "./components/WhatsAppButton";
import EnquiryButton from "./components/Enquiry";

import { featuredTour } from "./sampledata/sampledata";
import FeaturedLocation from "./components/FeaturedLocation";
import Services from "./components/service";

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton />
      <FeaturedLocation featuredTour={featuredTour} />
      <Services />
    </div>
  );
}

export default App;
