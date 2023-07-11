import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from 'store/slices/PostsSlice';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPostByID: builder.query<Post, number>({
      query: postID => `posts/${postID}`,
    }),
  }),
});

export const {useGetUsersQuery, useGetPostsQuery, useGetPostByIDQuery} =
  usersApi;

export const selectUsers = usersApi.endpoints.getUsers.select;

export default usersApi;
