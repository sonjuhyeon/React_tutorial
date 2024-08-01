import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const create_todo = (value) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), text: value, isEdit: false, isDone: false },
    ]);
  };

  const delete_todo = (id) => {
    setTodoValue(todoValue.filter((value_obj) => value_obj.id !== id));
  };

  const edit_todo = (id) => {
    setTodoValue(
      todoValue.map((value_obj) =>
        value_obj.id === id
          ? { ...value_obj, isEdit: !value_obj.isEdit }
          : value_obj
      )
    );
  };

  const is_complete = (id) => {
    setTodoValue(
      todoValue.map((value_obj) =>
        value_obj.id === id
          ? { ...value_obj, isDone: !value_obj.isDone }
          : value_obj
      )
    );
  };

  const edit_text = (text_value, id) => {
    setTodoValue(
      todoValue.map((value_obj) =>
        value_obj.id === id
          ? { ...value_obj, text: text_value, isEdit: !value_obj.isEdit }
          : value_obj
      )
    );
  };

  console.log(todoValue);

  return (
    <div className="container">
      <Form createTodo={create_todo} />
      {todoValue.map((value_obj) =>
        value_obj.isEdit ? (
          <Edit key={value_obj.id} editText={edit_text} task={value_obj} />
        ) : (
          <Todo
            key={value_obj.id}
            task={value_obj}
            deleteTodo={delete_todo}
            editTodo={edit_todo}
            isComplete={is_complete}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
