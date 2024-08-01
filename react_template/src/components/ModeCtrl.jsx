import React, { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <IoMoon /> : <MdOutlineWbSunny />}
    </button>
  );
};

export default ModeCtrl;
