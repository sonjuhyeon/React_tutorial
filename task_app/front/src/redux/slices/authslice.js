// 1. 슬라이스 생성
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: JSON.parse(localStorage.getItem("authData" || null)),
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // 업데이트 상태값 변경
      state.authData = action.payload.authData;
      state.token = action.payload.token;
      localStorage.setItem("authData", JSON.stringify(action.payload.authData));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      // 상태값 비움
      state.authData = null;
      state.token = null;
      localStorage.removeItem("authData");
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; // 4. export된 함수들을 store에 등록
