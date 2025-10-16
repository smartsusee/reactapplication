import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers";
import StudentReducer from "./StudentReducers";

export default configureStore({
  reducer: {
    counter: counterReducer,
    studentDetails: StudentReducer,
  },
});
