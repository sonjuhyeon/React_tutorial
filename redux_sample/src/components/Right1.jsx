import React from "react";
import Right2 from "./Right2";
import { useDispatch } from "react-redux";

const Right1 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right1: </h1>
      {/* redux 사용 전 */}
      {/* <Right2 n={props.n} onIncrease={() => props.onIncrease()} /> */}

      <button onClick={() => dispatch({ type: "DICREMENT" })}>-</button>

      <Right2 />
    </div>
  );
};

export default Right1;
