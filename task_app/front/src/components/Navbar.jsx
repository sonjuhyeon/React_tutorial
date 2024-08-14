import React, { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authslice";

import { navMenus } from "../utils/data";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Navbar = ({ menuIdx }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);
  const { name } = user || {};

  const googleClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
  const [isAuth, setIsAuth] = useState(false);

  const handleLoginSuccess = (response) => {
    const decodeed = jwtDecode(response.credential);

    dispatch(login({ authData: decodeed }));
    setIsAuth(true);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("authData"));
    if (storedData) {
      dispatch(login({ authData: storedData }));
      setIsAuth(true);
    }
  }, [dispatch]);

  useEffect(() => {
    // 구글 아이디가 가져와 졌을 때 구글 값 초기화
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleLoginSuccess,
      });
    }
  }, [googleClientId]);

  const handleLoginClick = () => {
    window.google.accounts.id.prompt(); // 로그인 팝업 띄우기
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    setIsAuth(false);
  };

  return (
    <nav className="navi bg-[#212121] w-1/5 h-full rounded-sm border border-gray-500 py-10 px-4 flex flex-col justify-between items-center">
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className="font-semibold text-xl">
          <Link to="/" className="font-customFontEn">
            Juhyeon
          </Link>
        </h2>
      </div>

      <ul className="menus">
        {navMenus.map((menu, idx) => (
          <li
            key={idx}
            className={`${
              menu.idx === menuIdx ? "bg-gray-950" : ""
            } border border-gray-700 rounded-sm mb-1`}
          >
            <Link to={menu.to} className="flex items-center gap-x-4 py-1 px-10">
              {menu.icon}
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
      {isAuth ? (
        <div className="w-4/5">
          <button
            onClick={handleLogoutClick}
            className="font-customFontEn flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-2 px-4 rounded-md w-full"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="text-base">{name}님 Logout</span>
          </button>
        </div>
      ) : (
        <div className="w-4/5">
          <button
            onClick={handleLoginClick}
            className="font-customFontEn flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-2 px-4 rounded-md w-full"
          >
            <FcGoogle className="h-5 w-5" />
            Login with Google
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
