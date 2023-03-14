import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setUsers } from "../../actions/usersActions";
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { AppDispatch, RootState } from "../../store";
import { setLoading, unsetLoading } from "../../reducers/loaderSlice";
import { getUsers } from "../../services/users";
import { loadUsers } from "../../reducers/usersReducer";
import { deletePost } from "../../reducers/postsSlice";

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
      setTimeout(() => {
        dispatch(deletePost());
      }, 2000);
    })();
  }, []);

  // const getUsersRequest = async () => {
  //   const response = await getUsers();
  //   dispatch(setUsers(response));
  // };

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
