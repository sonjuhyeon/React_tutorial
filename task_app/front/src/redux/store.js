import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";
import modalReducer from "./slices/modalSlice";
import apiReducer from "./slices/apiSlice";

// 5. store에 slice 등록
const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    api: apiReducer,
  },
});

export default store;
