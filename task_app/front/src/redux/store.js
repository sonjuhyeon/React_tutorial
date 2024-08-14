import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";
import modalReducer from "./slices/modalSlice";

// 5. store에 slice 등록
const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});

export default store;
