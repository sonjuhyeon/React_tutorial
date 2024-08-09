import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { fetchSalesMapData } from "../../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";

const SalesMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.salesMapData);

  useEffect(() => {
    dispatch(fetchSalesMapData());
  }, [dispatch]);

  console.log(state);

  return (
    <div className="w-[30%] px-[5px] py-[10px]">
      <div className="block-cell">
        <div className="header-wrapper">
          <HeadTitle title="Slase Mapping By Country" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SalesMap;
