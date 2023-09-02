import {StyleSheet} from 'react-native';
import {theme} from 'utils/theme';

export const getTextInputStyles = ({mode, Rp}: GetStyleSheetType) => {
  return StyleSheet.create({
    primary: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme[mode].brand.primary.dark,
      padding: Rp(10),
    },
    secondary: {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: theme[mode].brand.primary.dark,
      padding: Rp(10),
    },
  });
};

export const getIconStyle = ({Rp}: GetStyleSheetType) => {
  return StyleSheet.create({
    icon: {
      paddingHorizontal: Rp(15),
    },
  });
};

export const getInputStyle = () => {
  return StyleSheet.create({
    input: {
      flex: 1,
    },
  });
};

export const getTextInputIconPosition = () => {
  return StyleSheet.create({
    left: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
    },
  });
};
