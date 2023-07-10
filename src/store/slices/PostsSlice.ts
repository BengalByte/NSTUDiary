import {createSlice} from '@reduxjs/toolkit';
import usersApi, {useGetPostsQuery} from 'api/users';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  data: Post[];
}

const initialState: PostsState = {
  data: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      usersApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        return {...state, data: action.payload || []};
      },
    );
  },
});

export default postsSlice.reducer;
