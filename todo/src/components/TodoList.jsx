import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const create_todo = (value) => {
    setTodoValue([...todoValue, { id: uuidv4(), text: value, isEdit: false }]);
  };

  const delete_todo = (id) => {
    setTodoValue(todoValue.filter((value_obj) => value_obj.id !== id));
  };

  return (
    <div>
      <Form createTodo={create_todo} />
      {todoValue.map((value_obj) => (
        <Todo key={value_obj.id} task={value_obj} deleteTodo={delete_todo} />
      ))}
    </div>
  );
};

export default TodoList;
