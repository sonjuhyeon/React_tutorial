import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
