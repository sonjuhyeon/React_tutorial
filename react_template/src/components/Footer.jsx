import React from "react";
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from "../constants/data";
import { Link } from "react-router-dom";
import { TbBackground } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ background: "green" }}>
          <h3>Resources</h3>
          <ul>
            {resourcesLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "yellow" }}>
          <h3>Platform</h3>
          <ul>
            {platformLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "red" }}>
          <h3>Community</h3>
          <ul>
            {communityLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
