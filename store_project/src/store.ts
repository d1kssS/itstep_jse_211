import { productsReducer } from "./reducers/productsReducer";
import { counterReducer } from "./reducers/counterReducer";
import usersReducer from "./reducers/usersReducer";
import loaderSlice from "./reducers/loaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./reducers/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    users: usersReducer,
    loader: loaderSlice,
    posts: postsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
