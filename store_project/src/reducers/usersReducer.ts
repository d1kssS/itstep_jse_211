import { IUser } from "./../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/usersActions";

interface IUsersReducer {
  users: IUser[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: any | null;
}

const initialState: IUsersReducer = {
  users: [],
  status: "idle",
  error: null,
};

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          console.log({ action });
          state.status = "fulfilled";
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

console.log({ usersReducer });

export default usersReducer.reducer;
