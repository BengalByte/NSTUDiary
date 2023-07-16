import React, {useEffect} from 'react';
import {
  loadThemeFromAsyncStorage,
  setTheme,
  toggleTheme,
} from '@store/slices/ThemeSlice';
import {useAppDispatch, useTypedSelector} from '@store/store';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import useResponsiveSize from '../../hooks/useResponsiveSize';
import {theme} from 'utils/theme';
import CustomIcon from 'components/CustomIcon';

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
      // backgroundColor: 'teal',
      borderRadius: 10,
      borderWidth: Rp(3),
      borderColor: theme[currentTheme].primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity
      style={styles.toggleBody}
      activeOpacity={0.8}
      onPress={handleToggleTheme}>
      {/* <CustomIcon name="moon" size="20" /> */}
      {currentTheme === 'dark' ? (
        <View style={{}}>
          <CustomIcon
            style={{}}
            name="night"
            size={Rp(60)}
            color={theme[currentTheme].primaryColor}
          />
        </View>
      ) : (
        <CustomIcon
          name="day"
          size={Rp(60)}
          color={theme[currentTheme].primaryColor}
        />
      )}
    </TouchableOpacity>
  );
};

export default ToggleTheme;
