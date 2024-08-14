import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "./PageTitle";

const ItemPanel = ({ pageTitle }) => {
  const authData = useSelector((state) => state.auth.authData);
  const userKey = authData?.sub;

  return (
    <div className="panel bg-[#212121] w-4/5 h-full rounded-md border border-gray-500">
      {userKey ? (
        <div>
          <PageTitle title={pageTitle} />
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
