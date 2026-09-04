import { createSlice } from "@reduxjs/toolkit";

export const naikTurunSlice = createSlice({
  name: "counterNaikTurun",
  initialState: {
    totalCounter: 0,
  },
  reducers: {
    tambahCounter(state) {
      state.totalCounter = state.totalCounter + 1;
    },
    kurangCounter(state) {
      state.totalCounter = state.totalCounter - 1;
    },
  },
});

export const { tambahCounter, kurangCounter } = naikTurunSlice.actions;

export default naikTurunSlice.reducer;