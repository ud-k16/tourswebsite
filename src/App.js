import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FloatingWhatsappButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingWhatsappButton />
    </div>
  );
}

export default App;
