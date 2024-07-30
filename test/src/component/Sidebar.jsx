import React from "react";
import { routes } from "../constents/menuList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>LOGO</h2>
      <ul className="menus">
        {routes.map((route, idx) => (
          <li key={idx}>
            <a href="route.href">{route.href.slice(1)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
