import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  fetchDeleteItemData,
  fetchGetItemsData,
  fetchUpdateCompletedData,
} from "../redux/slices/apiSlice";

import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Item = ({ task }) => {
  const { _id, title, description, date, iscompleted, isimportant, userid } =
    task;
  const dispatch = useDispatch();

  const [isCompleted, setIsCompleted] = useState(iscompleted);
  const [isImportant, setIsImportant] = useState(isimportant);

  const deleteItem = async () => {
    const confirm = window.confirm("아이템을 삭제하시겠습니까?");

    if (!confirm) return;

    if (!_id) {
      toast.error("잘못된 사용자 접근입니다");
      return;
    }

    try {
      await dispatch(fetchDeleteItemData(_id)).unwrap();
      toast.success("아이템이 삭제되었습니다.");
      await dispatch(fetchGetItemsData(userid)).unwrap();
    } catch (error) {
      toast.error("아이템 삭제에 실패했습니다.");
      console.log(error);
    }
  };

  const changeCompleted = () => {
    setIsCompleted(!isCompleted);
    const updateCompletedData = {
      itemId: _id,
      isCompleted: isCompleted,
    };

    const options = {
      method: "PATCH",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCompletedData),
    };

    dispatch(fetchUpdateCompletedData(options));
  };

  const changeImportant = () => {
    setIsImportant(!isImportant);
  };

  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 px-4 flex-col justify-between bg-gray-950">
        <div className="upper">
          <h2 className="text-xl font-normal mb-3 relative pb-2">
            <span className="w-full h-[1px] bg-gray-500 absolute bottom-0"></span>
            {title}
          </h2>
          <p>{description}</p>
        </div>
        <div className="lower">
          <p className="text-sm mb-1">{date}</p>
          <div className="item-footer flex justify-between">
            <div className="item-footer-left flex gap-x-2">
              {isCompleted ? (
                <button
                  className="block py-1 px-4 bg-green-400 text-sm text-white rounded-md"
                  onClick={changeCompleted}
                >
                  Completed
                </button>
              ) : (
                <button
                  className="block py-1 px-4 bg-orange-400 text-sm text-white rounded-md"
                  onClick={changeCompleted}
                >
                  InCompleted
                </button>
              )}

              {isImportant ? (
                <button
                  className="block py-1 px-4 bg-blue-400 text-sm text-white rounded-md"
                  onClick={changeImportant}
                >
                  Important
                </button>
              ) : (
                <button
                  className="block py-1 px-4 bg-red-400 text-sm text-white rounded-md"
                  onClick={changeImportant}
                >
                  Unimportant
                </button>
              )}
            </div>
            <div className="item-footer-right flex gap-x-4 items-center">
              <button className="">
                <FaEdit />
              </button>
              <button className="delete" onClick={deleteItem}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
