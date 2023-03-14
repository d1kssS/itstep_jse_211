import { IUser } from "./../types/index";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../services/users";

export const fetchUsers = createAsyncThunk<IUser[]>("USERS_FETCH", async () => {
  const res = await getUsers();
  return res;
});

export const setUsers = createAction("SET_USERS");

console.log({ fetchUsers });
