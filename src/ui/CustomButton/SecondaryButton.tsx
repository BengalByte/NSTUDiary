import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './CustomButton.styles';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import {CustomButtonVariantProps} from './CustomButton.types';

const SecondaryButton: React.FC<CustomButtonVariantProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);

  const themeSecondaryStyle = {
    backgroundColor: theme[currentTheme].secondaryColor,
    color: theme[currentTheme].primaryColor,
  };
  return (
    <TouchableOpacity
      style={[styles.button, style, themeSecondaryStyle]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
