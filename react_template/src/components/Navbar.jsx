import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { authLink, navItems } from "../constants/data";
import ModeCtrl from "./ModeCtrl";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav>
      <div className="container relative">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_symbol">
              <span className="logo_dot"></span>
            </div>
            <span className="logo_title lg:text-xl md:text-lg">AceDot.Dev</span>
          </div>
          <ul className="navi hidden lg:flex">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="sub_links hidden lg:flex">
            {authLink.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`${
                  idx === 1 &&
                  "bg-gradient-to-r from-indigo-500 to bg-indigo-700 text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ModeCtrl />
          </div>
          <div className="menu_icon lg:hidden flex gap-x-2">
            <ModeCtrl />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sub_nav_mobile absolute bg-white w-full top-full left-0 dark:bg-neutral-900 mt-[1px] lg:hidden">
            <ul className="navi">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 border-b border-neutral-600 w-full text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="sub_links flex py-4 gap-2 justify-center border-b border-neutral-600">
              {authLink.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`${
                    idx === 1 &&
                    "bg-gradient-to-r from-indigo-500 to bg-indigo-700 text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
