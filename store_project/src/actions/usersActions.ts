import { IUser } from "./../types/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../services/users";

export const fetchUsers = createAsyncThunk<IUser[]>("USERS_FETCH", async () => {
  const res = await getUsers();
  return res;
});

console.log({fetchUsers})