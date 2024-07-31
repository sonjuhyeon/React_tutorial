import React from "react";

const Todo = ({ task, deleteTodo }) => {
  return (
    <div>
      <p>{task.text}</p>
      <button>수정</button>
      <button onClick={() => deleteTodo(task.id)}>삭제</button>
    </div>
  );
};

export default Todo;
