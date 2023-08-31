import {StyleSheet} from 'react-native';
import {FONTSIZE} from 'utils/fontSize';
import {theme} from 'utils/theme';

export const getTextStyles = ({mode, Rp}: GetStyleSheetType) => {
  return StyleSheet.create({
    bigTitle: {
      fontSize: Rp(FONTSIZE.large),
      color: theme[mode].brand.primary.dark,
    },
    headline: {
      fontSize: Rp(FONTSIZE.medium),
      color: theme[mode].base.primary.dark,
    },
    regularText: {
      fontSize: Rp(FONTSIZE.regular),
      color: theme[mode].base.primary.dark,
    },
    smallText: {
      fontSize: Rp(FONTSIZE.small),
      color: theme[mode].base.primary.dark,
    },
  });
};
