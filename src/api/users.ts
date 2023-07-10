import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
  }),
});

export const {useGetUsersQuery} = usersApi;

export const selectUsers = usersApi.endpoints.getUsers.select;

export default usersApi;
