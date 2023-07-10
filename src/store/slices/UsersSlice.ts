import {createSlice} from '@reduxjs/toolkit';
import usersApi from 'api/users';

export interface UsersState {
  data: []; // Need to update the interface properly
}

const initialState: UsersState = {
  data: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        return {...state, data: action.payload || []};
      },
    );
  },
});

export default usersSlice.reducer;
