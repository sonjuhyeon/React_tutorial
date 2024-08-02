import React from "react";
import { Link } from "react-router-dom";

const FooterContents = ({ title, linkData }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {linkData.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="text-neutral-300 hover:text-white">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContents;
