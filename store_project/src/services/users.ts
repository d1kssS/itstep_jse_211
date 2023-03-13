import { IUser } from "./../types/index";
import API from "../common/api";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await API.get("/users");
  return response.data;
};
