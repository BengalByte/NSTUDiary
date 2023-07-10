import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
    getPosts: builder.query<any, void>({
      query: () => 'posts',
    }),
  }),
});

export const {useGetUsersQuery, useGetPostsQuery} = usersApi;

export const selectUsers = usersApi.endpoints.getUsers.select;

export default usersApi;
