import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import UseEffect from "./components/UseEffect";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <UseEffect />

      <button onClick={() => setShow(!show)}>시계 toggle</button>
      {show && <Timer />}
    </div>
  );
}

export default App;
