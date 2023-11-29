import { configureStore } from '@reduxjs/toolkit';
import colorSlice from './slices/ColorSlice';
// import RootState from './store.types';
import usersApi from 'api/users';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import postsSlice from './slices/PostsSlice';
import themeSlice from './slices/ThemeSlice';
import tokenSlice from './slices/TokenSlice';
import usersSlice from './slices/UsersSlice';

const store = configureStore({
  reducer: {
    color: colorSlice,
    theme: themeSlice,
    users: usersSlice,
    posts: postsSlice,
    token: tokenSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
