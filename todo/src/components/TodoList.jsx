import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const create_todo = (value) => {
    setTodoValue([...todoValue, { id: uuidv4(), text: value, isEdit: false }]);
  };

  console.log(todoValue);
  return (
    <div>
      <Form createTodo={create_todo} />
      {todoValue.map((value_obj) => (
        <Todo key={value_obj.id} task={value_obj} />
      ))}
    </div>
  );
};

export default TodoList;
