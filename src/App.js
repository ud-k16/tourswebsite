import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./screens/home";
import TempScreen from "./screens/temp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<TempScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
