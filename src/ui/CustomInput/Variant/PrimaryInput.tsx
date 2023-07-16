import React from 'react';
import {TextInput, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import useResponsiveSize from 'hooks/useResponsiveSize';
import styles from './CustomInput.style';
import {CustomInputVariantProps} from '../CustomInput.types';

const CustomInput: React.FC<CustomInputVariantProps> = ({
  defaultValue,
  onChangeText,
  placeholder,
  style,
}) => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const variantStyles = StyleSheet.create({
    themePrimaryStyle: {
      backgroundColor: theme[currentTheme].neutral,
      color: theme[currentTheme].textColor,
      // borderColor: theme[currentTheme].primaryColor,
      // borderWidth: Rp(3),
    },
    sizePrimaryStyle: {
      width: Rp(800),
      height: Rp(120),
    },
    textPrimaryStyle: {
      fontSize: Rp(40),
    },
  });

  return (
    <TextInput
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme[currentTheme].neutral10}
      autoCapitalize="none"
      autoCorrect={false}
      style={[
        styles.input,
        variantStyles.themePrimaryStyle,
        variantStyles.sizePrimaryStyle,
        variantStyles.textPrimaryStyle,
        style,
      ]}
    />
  );
};

export default CustomInput;
