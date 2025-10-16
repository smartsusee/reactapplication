import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const StudentSlice = createSlice({
  name: "StudentDetailsCollect",

  initialState: {
    Details: [],
  },

  reducers: { 
    postMethod: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.Details.push(action.payload);
      } else {
        alert("please set You'r feild ");
      }
    },

    deleteMethod: (state, action) => {
      console.log(action.payload.id);
      if (action.payload.id) {
        state.Details = state.Details.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        alert("plese check you'r payload");
      }
    },
  },
});

export const { postMethod, deleteMethod } = StudentSlice.actions;

export default StudentSlice.reducer;
