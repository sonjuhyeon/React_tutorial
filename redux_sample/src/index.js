import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 6. provider와 store 경로를 import
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 7. provider의 속성으로 store를 지정하여 App component를 감싼다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
