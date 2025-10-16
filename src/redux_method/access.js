import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers";
import { useNavigate } from "react-router-dom";

const Access = () => {
  const getState = useSelector((state) => {
    console.log(state.counter.count);
    return state.counter.count;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: "100px", marginTop: "10px" }}>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>{" "}
      &nbsp;
      <span style={{ fontSize: "30px" }}>{getState}</span> &nbsp;
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          navigate("/studentData", true);
        }}
      >
        go to studentPage{" "}
      </button>
    </div>
  );
};

export default Access;
