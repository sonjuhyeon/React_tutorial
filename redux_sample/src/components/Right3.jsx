import React from "react";
import { useDispatch } from "react-redux";

const Right3 = () => {
  // 10. store에 있는 값을 변경하기 위해 useDispatch 사용
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3: </h1>

      {/* redux 사용 전 */}
      {/* <button onClick={() => props.onIncrease()}>+</button> */}

      {/* 11. 버튼을 클릭했을 때 dispatch의 파라미터로 변경할 타입 객체를 지정 - store의 reducer 함수 내부에 type별 변경 사항을 지정 - type의 값은 reducer의 action 인자에 대입*/}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};

export default Right3;
