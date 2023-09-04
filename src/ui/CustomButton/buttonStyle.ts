import {StyleSheet} from 'react-native';
import {theme} from 'utils/theme';

export const getButtonVariants = ({mode, Rp, Rh}: GetStyleSheetType) => {
  return StyleSheet.create({
    primary: {
      backgroundColor: theme[mode].brand.primary.normal,
      borderRadius: Rp(30),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      paddingHorizontal: Rp(40),
      paddingVertical: Rp(30),
    },
    secondary: {
      backgroundColor: theme[mode].brand.secondary.normal,
      borderRadius: Rp(30),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      paddingHorizontal: Rp(40),
      paddingVertical: Rp(30),
    },
    tertiary: {
      backgroundColor: theme[mode].brand.tertiary.normal,
      borderRadius: Rp(30),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      paddingHorizontal: Rp(40),
      paddingVertical: Rp(20),
    },
  });
};
