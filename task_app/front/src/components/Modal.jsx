import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";
import { toast } from "react-toastify";
import { fetchGetItemsData, fetchPostItemData } from "../redux/slices/apiSlice";

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

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.sub) {
      toast.error("잘못된 사용자 입니다.");
      return;
    }
    if (!formData.title) {
      toast.error("제목을 입력해주세요");
      return;
    }
    if (!formData.description) {
      toast.error("내용을 입력해주세요");
      return;
    }
    if (!formData.date) {
      toast.error("날짜를 입력해주세요");
      return;
    }

    try {
      dispatch(fetchPostItemData(formData));
      toast.success("할일이 추가되었습니다.");

      dispatch(closeModal());
      await dispatch(fetchGetItemsData(user?.sub)).unwrap();
    } catch (error) {
      console.log("Error adding task:", error);
      toast.error("할일 추가에 실패했습니다.");
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal fixed w-full h-full bg-black bg-opacity-50 flex items-center justify-center left-0 top-0 z-50">
      <div className="form-wrapper bg-gray-700 rounded-md w-1/2 flex flex-col items-center relative p-4">
        <h2 className="text-2xl py-2 border-b border-gray-300 w-fit font-semibold">
          할일 추가하기
        </h2>
        <form className="add-task-form w-full" onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="제목을 입력해주세요"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="input-control">
            <label htmlFor="description">내용</label>
            <textarea
              id="description"
              name="description"
              placeholder="내용을 입력해주세요"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="input-control">
            <label htmlFor="date">입력날짜</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="input-control toggler is-completed">
            <label htmlFor="isCompleted">완료 여부</label>
            <input
              type="checkbox"
              id="isCompleted"
              name="isCompleted"
              value={formData.isCompleted}
              onChange={handleChange}
            />
          </div>

          <div className="input-control toggler is-important">
            <label htmlFor="isImportant">중요성 여부</label>
            <input
              type="checkbox"
              id="isImportant"
              name="isImportant"
              value={formData.isImportant}
              onChange={handleChange}
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
