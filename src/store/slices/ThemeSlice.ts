import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../store';
import RootState from 'store/store.types';

type ThemeColors = 'light' | 'dark';
export interface ThemeState {
  currentTheme: ThemeColors;
}

const initialState: ThemeState = {
  currentTheme: 'light',
};

export const loadThemeFromAsyncStorage = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const theme = (await AsyncStorage.getItem('theme')) as ThemeColors;
      if (theme) {
        dispatch(setTheme(theme));
      } else {
        dispatch(setTheme(initialState.currentTheme));
      }
    } catch (error) {
      // Handle error while loading theme from async storage
    }
  };
};

export const setTheme = (theme: ThemeColors) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      await AsyncStorage.setItem('theme', theme);
      dispatch(themeSlice.actions.toggleTheme(theme));
    } catch (error) {
      // Handle error while setting theme in async storage
    }
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeColors>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
