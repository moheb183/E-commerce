import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_value: 0,
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state, action) => {
      state.counter_value += 1;
    },
    decrement: (state, action) => {
      state.counter_value -= 1;
    },
    incrementbyvalue: (state, action) => {
      state.counter_value += action.payload;
    },
  },
});

export const { increment, decrement, incrementbyvalue } = counter.actions;

export default counter.reducer;
