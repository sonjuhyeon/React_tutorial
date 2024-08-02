import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import "./Navbar.css";

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="mode_btn dark:bg-neutral-300 dark:text-neutral-950 bg-neutral-950 text-neutral-300 lg:p-2 ml-1 lg:text-2xl p-1 md:text-xl"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <MdOutlineWbSunny /> : <IoMoon />}
    </button>
  );
};

export default ModeCtrl;
