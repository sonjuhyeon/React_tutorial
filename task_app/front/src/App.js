import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Completed from "./components/Completed";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Completed />} />
          <Route path="/important" element={<Completed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
