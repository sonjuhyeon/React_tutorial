import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const handClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  }, [text]); // text 상태가 엡데이트 될때만 체크

  useEffect(() => {
    console.log(count);
  }, [count]); // count 상태가 엡데이트 될때만 체크

  useEffect(() => {
    console.log("update");
  }, []); // 빈 배열일 경우 초기 화면만 체크하고, 이후 상태변화는 체크하지 않음

  return (
    <div>
      <span>숫자 : {count}</span>
      <button onClick={handClick}>Click</button>
      <br />
      <br />
      <input type="text" onChange={handleChange} />
      <br />
      <br />
    </div>
  );
};

export default UseEffect;
