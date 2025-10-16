import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux_method/store";
import Access from "./redux_method/access";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetailsCollected from "./redux_method/StudentDetailsCollected";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/studentData" element={<StudentDetailsCollected />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
