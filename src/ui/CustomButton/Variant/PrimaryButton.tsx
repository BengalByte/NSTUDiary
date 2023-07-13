import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CustomButtonVariantProps} from '../CustomButton.types';
// import styles from './CustomButton.styles';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import styles from './CustomButton.styles';
import useResponsiveSize from 'hooks/useResponsiveSize';

const PrimaryButton: React.FC<CustomButtonVariantProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const variantStyles = StyleSheet.create({
    themePrimaryStyle: {
      backgroundColor: theme[currentTheme].primaryColor,
      color: theme[currentTheme].primaryColor,
    },
    sizePrimaryStyle: {
      width: Rp(500),
      height: Rp(120),
    },
    textPrimaryStyle: {
      textAlign: 'center',
      fontSize: Rp(40),
      color: theme[currentTheme].white,
    },
  });

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        variantStyles.themePrimaryStyle,
        variantStyles.sizePrimaryStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={[styles.text, textStyle, variantStyles.textPrimaryStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
