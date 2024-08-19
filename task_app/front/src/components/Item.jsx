import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  fetchDeleteItemData,
  fetchGetItemsData,
  fetchUpdateCompletedData,
} from "../redux/slices/apiSlice";
import { openModal } from "../redux/slices/modalSlice";

import { FaTrash, FaEdit } from "react-icons/fa";
import {
  GoCheckCircleFill,
  GoChecklist,
  GoStarFill,
  GoStar,
} from "react-icons/go";
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

  const changeCompleted = async () => {
    // setIsCompleted(!isCompleted)을 호출하면 상태 업데이트가 비동기적으로 이루어지기 때문에, isCompleted의 값이 즉시 변경되지 않는다.
    // 따라서 updateCompletedData 객체를 생성할 때 isCompleted의 이전 값이 사용된다. 이로 인해 true/false가 한 단계씩 밀리게 된다.

    const newIsCompleted = !isCompleted;
    setIsCompleted(newIsCompleted);

    const updateCompletedData = {
      itemId: _id,
      isCompleted: newIsCompleted,
    };

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCompletedData),
    };

    await dispatch(fetchUpdateCompletedData(options)).unwrap();
    newIsCompleted
      ? toast.success("할일을 완료했습니다.")
      : toast.success("할일을 완료하지 못했습니다.");
    await dispatch(fetchGetItemsData(userid)).unwrap();
  };

  const changeImportant = () => {
    const newIsImortant = !isImportant;
    setIsImportant(newIsImortant);
  };

  const handleOpenModal = () => {
    dispatch(openModal({ modalType: "update", task }));
  };

  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 px-4 flex-col justify-between bg-gray-950">
        <div className="upper">
          <h2 className="text-xl font-normal mb-3 relative pb-2 flex items-center justify-between">
            <span className="w-full h-[1px] bg-gray-500 absolute bottom-0"></span>
            {title}
            <div className="flex gap-x-4">
              {iscompleted && <GoChecklist className="text-blue-400" />}
              <button onClick={changeImportant}>
                {isimportant ? (
                  <GoStarFill className="text-[yellow]" />
                ) : (
                  <GoStar />
                )}
              </button>
            </div>
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
        </div>
        <div className="lower">
          <p className="text-sm mb-1">{date}</p>
          <div className="item-footer flex justify-between">
            <div className="item-footer-left">
              {iscompleted ? (
                <button
                  className="py-1 px-4 bg-cyan-400 text-sm text-white rounded-md flex items-center gap-x-1"
                  onClick={changeCompleted}
                >
                  <GoCheckCircleFill className="text-green-700" />
                  Completed
                </button>
              ) : (
                <button
                  className="block py-1 px-4 bg-red-400 text-sm text-white rounded-md"
                  onClick={changeCompleted}
                >
                  InCompleted
                </button>
              )}
            </div>
            <div className="item-footer-right flex gap-x-4 items-center">
              <button className="">
                <FaEdit onClick={handleOpenModal} />
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
