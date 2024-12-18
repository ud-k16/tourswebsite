import "./App.css";
import Header from "./components/Header";
import FloatingWhatsappButton from "./components/WhatsAppButton";
import EnquiryButton from "./components/Enquiry";

import { featuredTour } from "./sampledata/sampledata";
import FeaturedLocation from "./components/FeaturedLocation";

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton />
      <FeaturedLocation featuredTour={featuredTour} />
    </div>
  );
}

export default App;
