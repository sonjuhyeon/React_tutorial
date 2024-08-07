import React from "react";
import { Icons } from "../../assets/icons";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-gray-950 py-5 px-4 shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] flex flex-col rounded-sm z-[1000] fixed h-full">
      <div className="sidebar-top flex justify-between items-center">
        <div className="sidebar-brand flex items-center gap-x-[12px]">
          <span className="brand-log bg-blue-600 rounded-md w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="" className="w-6" />
          </span>
          <span className="text-lg font-semibold text-white">Juhyeon</span>
        </div>
        <button className="bg-white text-black p-[0.125rem rounded-sm] hover:bg-gray-300">
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
