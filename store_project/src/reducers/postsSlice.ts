import { createSlice } from "@reduxjs/toolkit";
const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers: {
    deletePost: (state) => {
      state.posts = [];
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
