import React from "react";
import TotalRevenue from "./TotalRevenue";
import Sales from "./Sales";

const DashboardScreen = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-x-[14px] mt-[14px]">
      <Sales />
      <TotalRevenue />
    </div>
  );
};

export default DashboardScreen;
