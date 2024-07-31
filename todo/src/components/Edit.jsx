import React, { useState } from "react";

const Edit = ({ editText, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editText(value, task.id);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="수정할 내용 입력"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>수정</button>
    </form>
  );
};

export default Edit;
