import {StyleSheet} from 'react-native';
import {theme} from 'utils/theme';

export const getButtonVariants = ({mode, Rp, Rh}: GetStyleSheetType) => {
  return StyleSheet.create({
    primary: {
      backgroundColor: theme[mode].brand.primary.normal,
      height: Rp(120),
      borderRadius: Rp(30),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondary: {
      backgroundColor: theme[mode].brand.secondary.normal,
      height: Rp(120),
      borderRadius: Rp(30),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
