import { createReducer } from "@reduxjs/toolkit";
import {
  increment,
  decrement,
  incrementRandom,
} from "../actions/counterActions";
const initialState = { counter: 0 };

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.counter++;
    })
    .addCase("DEC", (state) => {
      state.counter--;
    })
    .addCase(incrementRandom, (state, action) => {
      state.counter += action.payload;
    });
});
