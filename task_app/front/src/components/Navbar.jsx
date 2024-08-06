import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authslice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth); // auth는 store.js에 정의된 reducer 객체요소의 key
  console.log(userInfo);

  const handleLoginSucces = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    // userInfo.jti
    dispatch(
      login({
        userName: userData.given_name,
        userImg: userData.picture,
        userToken: userData.jti,
        userEmail: userData.email,
      })
    );
  };

  return (
    <div className="navi">
      <GoogleLogin
        onSuccess={handleLoginSucces}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Navbar;

// (credentialResponse) => {
//   const userInfo = jwtDecode(credentialResponse.credential);
//   console.log(userInfo.jti);
//   console.log(userInfo.email);
//   console.log(userInfo.given_name);
//   console.log(userInfo.picture);
// }
