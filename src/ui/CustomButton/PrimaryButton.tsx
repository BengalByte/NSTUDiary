import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonVariantProps} from './CustomButton.types';
import styles from './CustomButton.styles';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

const PrimaryButton: React.FC<CustomButtonVariantProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const themePrimaryStyle = {
    backgroundColor: theme[currentTheme].primaryColor,
    color: theme[currentTheme].secondaryColor,
    // Other button styles...
  };

  return (
    <TouchableOpacity
      style={[styles.button, style, themePrimaryStyle]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
