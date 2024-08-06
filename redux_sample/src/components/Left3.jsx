import React from "react";
import { useSelector } from "react-redux";
// 8. store에 있는 값을 가져오기 위해 useSelector를 import

const Left3 = () => {
  //9. store에 있는 상태값을 받아서 저장
  const number = useSelector((state) => state.number);

  console.log(number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
};

export default Left3;
