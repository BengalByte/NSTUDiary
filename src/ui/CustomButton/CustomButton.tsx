import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import styles from './CustomButton.styles';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const themeStyle = {
    backgroundColor: theme[currentTheme].primaryColor,
    color: theme[currentTheme].secondaryColor,
    // Other button styles...
  };
  return (
    <TouchableOpacity
      style={[styles.button, style, themeStyle]}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
