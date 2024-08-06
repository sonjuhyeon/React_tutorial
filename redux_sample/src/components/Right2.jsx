import React from "react";
import Right3 from "./Right3";

const Right2 = () => {
  return (
    <div>
      <h1>Right2: </h1>
      {/* redux 사용 전 */}
      {/* <Right3
        n={props.n}
        onIncrease={() => {
          props.onIncrease();
        }}
      /> */}

      <Right3 />
    </div>
  );
};

export default Right2;
