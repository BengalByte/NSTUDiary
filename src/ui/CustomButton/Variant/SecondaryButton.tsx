import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import {CustomButtonVariantProps} from '../CustomButton.types';
import styles from './CustomButton.styles';
import useResponsiveSize from 'hooks/useResponsiveSize';

const SecondaryButton: React.FC<CustomButtonVariantProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);

  const variantStyles = StyleSheet.create({
    themeSecondaryStyle: {
      backgroundColor: 'transparent',
      borderWidth: Rp(3),
      borderColor: theme[currentTheme].primaryColor,
    },
    sizeSecondaryStyle: {
      width: Rp(500),
      height: Rp(120),
    },
    textSecondaryStyle: {
      color: theme[currentTheme].primaryColor,
      textAlign: 'center',
    },
  });
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        variantStyles.themeSecondaryStyle,
        variantStyles.sizeSecondaryStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={[styles.text, textStyle, variantStyles.textSecondaryStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
