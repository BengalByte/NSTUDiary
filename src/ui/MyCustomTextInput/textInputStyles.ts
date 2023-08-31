import {StyleSheet} from 'react-native';
import {theme} from 'utils/theme';

export const getTextInputStyles = ({mode, Rp}: GetStyleSheetType) => {
  return StyleSheet.create({
    primary: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme[mode].brand.primary.dark,
    },
    secondary: {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: theme[mode].brand.primary.dark,
    },
  });
};
