// import { useState } from "react";
import Left1 from "./components/Left1";
import Right1 from "./components/Right1";

// 1. redux 폴더 생성 후 store.js 파일 생성

function App() {
  // const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <h1>Root App</h1>
      <div className="wrapper">
        {/* redux 사용 전 */}
        {/* <Left1 n={number} />
        <Right1 n={number} onIncrease={() => setNumber(number + 1)} /> */}

        <Left1 />
        <Right1 />
      </div>
    </div>
  );
}

export default App;
