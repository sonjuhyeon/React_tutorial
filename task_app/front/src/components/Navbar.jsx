import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authslice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth); // auth는 store.js에 정의된 reducer 객체요소의 key

  const [isAuth, setIsAuth] = useState(false); // userInfo가 없는 상태로 초기화

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedPicture = localStorage.getItem("userPicture");
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");

    if (storedToken) {
      dispatch(
        login({
          userName: storedName,
          userImg: storedPicture,
          userToken: storedToken,
          userEmail: storedEmail,
        })
      );
    }
  }, [dispatch]);

  const handleLoginSuccess = (credentialResponse) => {
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
    setIsAuth(true);
  };

  if (window.google) {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
      callback: handleLoginSuccess,
    });
  }

  const handleLogin = () => {
    window.google.accounts.id.prompt();
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsAuth(false);
  };

  return (
    <div className="navi">
      {/* <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}

      {userInfo.userToken ? (
        <div>
          <h2>{userInfo.userName}님 로그인 되었습니다.</h2>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <h2>로그인이 필요합니다.</h2>
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      )}
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
