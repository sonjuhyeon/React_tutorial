import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const LoadingSkeleton = () => {
  return (
    <div>
      <SkeletonTheme
        baseColor="#202020"
        highlightColor="#444"
        width="100%"
        height="25vh"
      >
        <p>
          <Skeleton count={3} width="100%" height="30px" />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default LoadingSkeleton;
