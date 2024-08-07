// 1. 슬라이스 생성
import { createSlice } from "@reduxjs/toolkit";

// 2. 초기상태 정의
const initialState = {
  userName: localStorage.getItem("userName") || null,
  userImg: localStorage.getItem("userImg") || null,
  userToken: localStorage.getItem("userToken") || null,
  userEmail: localStorage.getItem("userEmail") || null,
};

// 3. slice 생성
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.userImg = action.payload.userImg;
      state.userToken = action.payload.userToken;
      state.userEmail = action.payload.userEmail;
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("userImg", action.payload.userImg);
      localStorage.setItem("userToken", action.payload.userToken);
      localStorage.setItem("userEmail", action.payload.userEmail);
    },
    logout: (state) => {
      state.userName = null;
      state.userImg = null;
      state.userToken = null;
      state.userEmail = null;
      localStorage.removeItem("userName");
      localStorage.removeItem("userImg");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userEmail");
    },
  },
});

// export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; // 4. export된 함수들을 store에 등록
