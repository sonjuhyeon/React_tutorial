import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Completed from "./components/Completed";
import Proceeding from "./components/Proceeding";
import Important from "./components/Important";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Proceeding />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
