import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal fixed w-full h-full bg-black bg-opacity-50 flex items-center justify-center left-0 top-0 z-50">
      <div className="form-wrapper bg-gray-600 rounded-md w-1/2 h-[40vh]">
        <IoMdClose className="cursor-pointer" onClick={handleCloseModal} />
      </div>
    </div>
  );
};

export default Modal;
