import React, {useEffect} from 'react';
import {
  loadThemeFromAsyncStorage,
  setTheme,
  toggleTheme,
} from '@store/slices/ThemeSlice';
import {useAppDispatch, useTypedSelector} from '@store/store';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ToggleTheme: React.FC = () => {
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

  return (
    <TouchableOpacity
      style={styles.toggleBody}
      activeOpacity={0.5}
      onPress={handleToggleTheme}></TouchableOpacity>
  );
};

export default ToggleTheme;

const styles = StyleSheet.create({
  toggleBody: {
    width: 50,
    height: 50,
    backgroundColor: 'teal',
    borderRadius: 10,
  },
});
