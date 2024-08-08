import React, { useState } from "react";
import { Icons } from "../../assets/icons";
import { MdOutlineClose } from "react-icons/md";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MENU_LISTS, routes } from "../../constants/menuLists";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const selectMenuHandler = (idx) => {
    setSelectedMenu(idx);
  };

  return (
    <div className="bg-gray-950 py-5 px-4 shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] flex flex-col rounded-sm z-[1000] fixed h-full gap-y-12">
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
      <div className="sidebar-body">
        <BrowserRouter>
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Routes>
          <div className="sidebar-menu">
            <ul className="menu-lists grid gap-y-1.5">
              {MENU_LISTS.map((menu, idx) => (
                <li key={idx}>
                  <Link
                    to={routes[idx].path}
                    className={`menu-item h-[44px] flex items-center gap-x-[14px] py-1 px-5 font-medium
                      ${
                        idx === selectedMenu
                          ? "bg-blue-700 text-white rounded-sm"
                          : ""
                      }`}
                    onClick={() => selectMenuHandler(idx)}
                  >
                    <span
                      className={`w-5 ${
                        idx === selectedMenu ? "invert-[1] brightness-100" : ""
                      }`}
                    >
                      <img src={menu.icon} alt={menu.alt} />
                    </span>
                    <span>{menu.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Sidebar;
