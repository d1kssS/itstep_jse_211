import { IUser } from "./../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/usersActions";
import { deletePost } from "./postsSlice";

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
      console.log("LOAD USERS");
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePost, (state, action, ...rest) => {
        console.log("postsSlice.actions.deletePost");
        state.users = [];
      })
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
export const { loadUsers } = usersReducer.actions;
export default usersReducer.reducer;
