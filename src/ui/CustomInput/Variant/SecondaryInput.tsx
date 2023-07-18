import React from 'react';
import {TextInput, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import useResponsiveSize from 'hooks/useResponsiveSize';
import styles from './CustomInput.style';
import {CustomInputVariantProps} from '../CustomInput.types';

const CustomInputSecondary: React.FC<CustomInputVariantProps> = ({
  defaultValue,
  onChangeText,
  placeholder,
  style,
  inputType,
}) => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const variantStyles = StyleSheet.create({
    themeSecondaryStyle: {
      borderColor: theme[currentTheme].primaryColor,
      borderWidth: Rp(3),
      color: theme[currentTheme].textColor,
    },
    sizeSecondaryStyle: {
      width: Rp(800),
      height: Rp(120),
    },
    textSecondaryStyle: {
      fontSize: Rp(40),
    },
  });

  return (
    <TextInput
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme[currentTheme].neutral}
      secureTextEntry={inputType === 'password' ? true : false}
      autoCapitalize="none"
      autoCorrect={false}
      style={[
        styles.input,
        variantStyles.themeSecondaryStyle,
        variantStyles.sizeSecondaryStyle,
        variantStyles.textSecondaryStyle,
        style,
      ]}
    />
  );
};

export default CustomInputSecondary;
