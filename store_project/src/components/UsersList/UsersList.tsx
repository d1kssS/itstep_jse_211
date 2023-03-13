import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { AppDispatch, RootState } from "../../store";
import { setLoading, unsetLoading } from "../../reducers/loaderSlice";

const UsersList = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector<RootState, string>((state) => state.users.status);
  const users = useSelector<RootState, IUser[]>((state) => state.users.users);

  // @ts-ignore
  useEffect(() => {
    (async () => {
      await dispatch(setLoading());
      await dispatch(fetchUsers());
      await dispatch(unsetLoading());
    })();
  }, []);

  if (status === "pending") {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
