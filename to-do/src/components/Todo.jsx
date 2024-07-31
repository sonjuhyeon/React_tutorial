import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-slate-500 text-gray-300 py-3 px-4 rounded-md mb-1 my-1">
      <p>{task.task}</p>
      <div className="flex items-center gap-x-4">
        <MdModeEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <IoTrashBin className="text-xl" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
