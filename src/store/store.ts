import {configureStore, createSlice} from '@reduxjs/toolkit';
import colorSlice from './slices/ColorSlice';
import RootState from './store.types';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import themeSlice from './slices/ThemeSlice';
import usersApi from 'api/users';
import usersSlice from './slices/UsersSlice';

const store = configureStore({
  reducer: {
    color: colorSlice,
    theme: themeSlice,
    users: usersSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
