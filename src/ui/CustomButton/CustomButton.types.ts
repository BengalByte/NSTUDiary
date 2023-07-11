import {TextStyle, ViewStyle} from 'react-native';

export interface CustomButtonVariantProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface CustomButtonProps {
  onPress: () => void;
  title: string;
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
}
