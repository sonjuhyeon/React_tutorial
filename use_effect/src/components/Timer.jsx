import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const min = date.getMinutes();
      const sec = date.getSeconds();

      console.log(`${min}분 ${sec}초`);
    }, 1000);

    return () => {
      clearInterval(timer);
    }; // clearup: 컴포넌트가 사라질 때
  }, []);

  return <div>Timer</div>;
};

export default Timer;
