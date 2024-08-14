import React, { useEffect, useState } from "react";

import PageTitle from "./PageTitle";
import Item from "./Item";
import AddItem from "./AddItem";
import Modal from "./Modal";
import LoadingSkeleton from "./LoadingSkeleton";

import { useDispatch, useSelector } from "react-redux";
import { fetchGetItemsData } from "../redux/slices/apiSlice";

const ItemPanel = ({ pageTitle }) => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const getTasksData = useSelector((state) => state.api.getItemsData);
  const userKey = authData?.sub;

  const [loading, setLoading] = useState(false);

  // console.log(isOpen);
  // console.log(userKey);
  // console.log(getTasksData);
  // console.log(loading);

  useEffect(() => {
    if (!userKey) {
      return;
    }

    const fetchGetItems = async () => {
      try {
        setLoading(true);
        await dispatch(fetchGetItemsData(userKey)).unwrap();
      } catch (error) {
        console.log("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGetItems();
  }, [dispatch, userKey]);

  return (
    <div className="panel bg-[#212121] w-4/5 h-full rounded-md border border-gray-500 py-5 px-4">
      {userKey ? (
        <div className="panel-wrapper">
          {isOpen && <Modal />}

          <PageTitle title={pageTitle} />

          <div className="panel-items">
            <div className="items flex flex-wrap">
              {loading ? (
                <div>
                  <LoadingSkeleton />
                </div>
              ) : (
                getTasksData?.map((item, idx) => <Item key={idx} task={item} />)
              )}
              <AddItem />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <button className="font-customFontEn flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-2 px-4 rounded-md w-fit">
            <span className="text-sm font-semibold">
              로그인이 필요한 서비스 입니다.
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemPanel;
