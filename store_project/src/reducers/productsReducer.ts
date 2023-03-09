import { createReducer } from "@reduxjs/toolkit";
import { createProductAction } from "../actions/productsActions";
const initialState = {
  list: [{ id: 1, name: "Milk", price: 1230 }],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(createProductAction, (state, action) => {
    state.list.push({
      ...action.payload,
      id: state.list.length + Math.random(),
    });
  });
});
