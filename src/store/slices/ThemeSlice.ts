// themeSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from '../store';

export interface ThemeState {
  currentTheme: string; // Can be "dark" or "light"
}

const initialState: ThemeState = {
  currentTheme: 'light',
};

export const loadThemeFromAsyncStorage = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      if (theme) {
        dispatch(setTheme(theme));
      }
    } catch (error) {
      // Handle error while loading theme from async storage
    }
  };
};

export const setTheme = (theme: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await AsyncStorage.setItem('theme', theme);
      dispatch(toggleTheme(theme));
    } catch (error) {
      // Handle error while setting theme in async storage
    }
  };
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
