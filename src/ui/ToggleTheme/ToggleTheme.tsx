import React, {useEffect} from 'react';
import {
  loadThemeFromAsyncStorage,
  setTheme,
  toggleTheme,
} from '@store/slices/ThemeSlice';
import {useAppDispatch, useTypedSelector} from '@store/store';
import {StyleSheet, TouchableOpacity} from 'react-native';
import useResponsiveSize from '../../hooks/useResponsiveSize';

const ToggleTheme: React.FC = () => {
  const {Rp} = useResponsiveSize();
  const dispatch = useAppDispatch();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  useEffect(() => {
    dispatch(loadThemeFromAsyncStorage());
  }, [dispatch]);

  const handleToggleTheme = () => {
    console.log('This is Log');
    if (currentTheme === 'light') {
      dispatch(toggleTheme('dark'));
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
      dispatch(toggleTheme('light'));
    }
  };
  const styles = StyleSheet.create({
    toggleBody: {
      width: Rp(100),
      height: Rp(100),
      backgroundColor: 'teal',
      borderRadius: 10,
    },
  });

  return (
    <TouchableOpacity
      style={styles.toggleBody}
      activeOpacity={0.5}
      onPress={handleToggleTheme}></TouchableOpacity>
  );
};

export default ToggleTheme;
