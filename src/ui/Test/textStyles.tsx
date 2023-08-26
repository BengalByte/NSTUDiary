// textStyles.tsx
import {StyleSheet} from 'react-native';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

export const getTextStyles = (currentTheme: 'light' | 'dark') => {
  return StyleSheet.create({
    bigTitle: {
      fontSize: 34,
      color: theme[currentTheme].danger, // Use the primaryColor from the theme
    },
    headline: {
      fontSize: 21,
      color: theme[currentTheme].primaryColor, // Use the primaryColor from the theme
    },
    // Other text styles
  });
};
