import React from "react";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-slate-500 text-gray-300 py-3 px-4 rounded-md mb-1 my-1">
      <p>{task.text}</p>
      <div className="flex items-center gap-x-4">
        <button onClick={() => editTodo(task.id)}>수정</button>
        <button onClick={() => deleteTodo(task.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Todo;
