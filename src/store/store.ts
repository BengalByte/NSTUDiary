import {configureStore} from '@reduxjs/toolkit';
import colorSlice from './slices/ColorSlice';
import RootState from './store.types';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const store = configureStore({
  reducer: {
    color: colorSlice,
    // Add other slices' reducers here
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
