import React, { useEffect } from "react";
import { fetchRevenueData } from "../../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.revenueData);

  useEffect(() => {
    dispatch(fetchRevenueData());
  }, [dispatch]);

  console.log(state);
  return <div>TotalRevenue</div>;
};

export default TotalRevenue;
