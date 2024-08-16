import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    isCompleted: false,
    isImportant: false,
    userId: user?.sub,
  });

  const handleSubmit = (e) => {};

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal fixed w-full h-full bg-black bg-opacity-50 flex items-center justify-center left-0 top-0 z-50">
      <div className="form-wrapper bg-gray-700 rounded-md w-1/2 flex flex-col items-center relative p-4">
        <h2 className="text-2xl py-2 border-b border-gray-300 w-fit font-semibold">
          할일 추가하기
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="제목을 입력해주세요"
              value={formData.title}
            />
          </div>

          <div className="input-control">
            <label htmlFor="description">내용</label>
            <textarea
              id="description"
              name="description"
              placeholder="내용을 입력해주세요"
              value={formData.description}
            />
          </div>

          <div className="input-control">
            <label htmlFor="date">입력날짜</label>
            <input type="date" id="date" name="date" value={formData.date} />
          </div>

          <div className="input-control toggler">
            <label htmlFor="isCompleted">완료 여부</label>
            <input
              type="checkbox"
              id="isCompleted"
              name="isCompleted"
              value={formData.isCompleted}
            />
          </div>

          <div className="input-control toggler">
            <label htmlFor="isImportant">중요성 여부</label>
            <input
              type="checkbox"
              id="isImportant"
              name="isImportant"
              value={formData.isImportant}
            />
          </div>

          <div className="submit-btn flex justify-end">
            <button
              type="submit"
              className="flex justify-normal bg-black w-fit py-3 px-6 rounded-md hover:bg-slate-900"
            >
              Create Task
            </button>
          </div>
        </form>
        <IoMdClose
          className="cursor-pointer absolute right-5 top-5 w-7 h-7"
          onClick={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Modal;
