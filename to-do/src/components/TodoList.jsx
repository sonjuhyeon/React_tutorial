import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEdit: false }]); // todoValue 배열에 todo를 합산하여 새로운 배열 생성
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const editTask = (editValue, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id
          ? { ...todo, task: editValue, isEdit: !todo.isEdit }
          : todo
      )
    );
  };

  console.log(todoValue);

  return (
    <div className="container">
      <Form createTodo={createTodo} />

      {todoValue.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
