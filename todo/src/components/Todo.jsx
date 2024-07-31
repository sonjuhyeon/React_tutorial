import React from "react";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div>
      <p>{task.text}</p>
      <button onClick={() => editTodo(task.id)}>수정</button>
      <button onClick={() => deleteTodo(task.id)}>삭제</button>
    </div>
  );
};

export default Todo;
