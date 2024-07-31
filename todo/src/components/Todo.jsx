import React from "react";

const Todo = ({ task }) => {
  return (
    <div>
      <p>{task.text}</p>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default Todo;
