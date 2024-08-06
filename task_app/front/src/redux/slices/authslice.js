// 1. 슬라이스 생성
import { createSlice } from "@reduxjs/toolkit";

// 2. 초기상태 정의
const initialState = {
  userName: null,
  userImg: null,
  userToken: null,
  userEmail: null,
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
    },
    logout: (state) => {
      state.userName = null;
      state.userImg = null;
      state.userToken = null;
      state.userEmail = null;
    },
  },
});

// export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; // 4. export된 함수들을 store에 등록
