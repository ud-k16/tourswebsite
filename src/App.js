import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FloatingWhatsappButton from "./components/WhatsAppButton";
import EnquiryButton from "./components/Enquiry";

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingWhatsappButton />
      <EnquiryButton />
    </div>
  );
}

export default App;
