import Header from "../components/Header";
import FloatingWhatsappButton from "../components/WhatsAppButton";
import EnquiryButton from "../components/Enquiry";
import FeaturedLocation from "../components/home/FeaturedLocation";
import Services from "../components/home/service";
import { featuredTour } from "../sampledata/sampledata";
import Achievements from "../components/home/Achievements";
import Departure from "../components/home/Departure";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import MessageForm from "../components/home/MessageForm";
import Footer from "../components/Footer";
import Contact from "../components/home/Contact";
import FixedDeparture from "../components/home/FixedDeparture";
import Awards from "../components/home/Awards";
import ReviewSection from "../components/home/ReviewSection";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    // pop up form after some time in the website
    setTimeout(() => {
      openModal();
    }, 8000);
  }, []);
  return (
    <div>
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton openModal={openModal} />
      {isModalOpen && (
        <Modal children={<MessageForm closeModal={closeModal} />} />
      )}
      <FeaturedLocation featuredTour={featuredTour} />
      <Services />
      <Achievements />
      <Departure />
      <FixedDeparture />
      <Awards />
      <ReviewSection />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
