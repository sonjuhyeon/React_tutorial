import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  return (
    <div className="navi">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Navbar;
