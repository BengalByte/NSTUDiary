import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../store';

export interface TokenState {
  token: string | null;
}

const initialState: TokenState = {
  token: null,
};

export const loadTokenFromAsyncStorage = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        dispatch(setToken(token));
      }
    } catch (error) {
      // Handle error while loading token from async storage
    }
  };
};

export const setToken = (token: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.setItem('token', token);
      dispatch(updateToken(token));
    } catch (error) {
      // Handle error while setting token in async storage
    }
  };
};

export const clearToken = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(updateToken(null));
    } catch (error) {
      // Handle error while clearing token from async storage
    }
  };
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const {updateToken} = tokenSlice.actions;
export default tokenSlice.reducer;
