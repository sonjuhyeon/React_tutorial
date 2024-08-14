import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-700 rounded-md flex py-3 px-4 flex-col justify-between">
        <div className="upper">
          <Skeleton width="30%" height="30px" className="mb-3" />
          <Skeleton width="100%" height="70px" />
        </div>
        <div className="lower">
          <Skeleton width="15%" height="15px" />
          <div className="item-footer flex justify-between">
            <div className="item-footer-left flex gap-x-2 w-full">
              <Skeleton width="100%" height="20px" />
              <Skeleton width="100%" height="20px" />
            </div>
            <div className="item-footer-right flex items-center justify-end w-full">
              <Skeleton width="50%" height="20px" />
              <Skeleton width="50%" height="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
