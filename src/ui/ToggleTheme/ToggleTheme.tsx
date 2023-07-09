import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadThemeFromAsyncStorage, toggleTheme} from '@store/slices/ThemeSlice';
import CustomButton from 'ui/CustomButton';
import {useAppDispatch} from 'store/store';

const ToggleTheme: React.FC = () => {
  const dispatch = useAppDispatch();

  // const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadThemeFromAsyncStorage());
  }, [dispatch]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme('light'));
  };

  return <CustomButton onPress={handleToggleTheme} title="Toggle" />;
};

export default ToggleTheme;
