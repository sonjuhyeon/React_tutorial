import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="입력"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>추가</button>
    </form>
  );
};

export default Form;
