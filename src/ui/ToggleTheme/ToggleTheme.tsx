import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadThemeFromAsyncStorage, toggleTheme} from '@store/slices/ThemeSlice';
import CustomButton from '@ui/CustomButton';
import {useAppDispatch, useTypedSelector} from '@store/store';

const ToggleTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  useEffect(() => {
    dispatch(loadThemeFromAsyncStorage());
  }, [dispatch]);

  const handleToggleTheme = () => {
    if (currentTheme === 'light') {
      dispatch(toggleTheme('dark'));
    } else {
      dispatch(toggleTheme('light'));
    }
  };

  return <CustomButton onPress={handleToggleTheme} title="Toggle" />;
};

export default ToggleTheme;
