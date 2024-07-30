import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(1);

  const handClick = () => {
    console.log("clicked", count);
    setCount(count + 1);
  };

  return (
    <div>
      <span>숫자 : {count}</span>
      <button onClick={handClick}>Click</button>
    </div>
  );
};

export default UseState;
