import {ViewStyle} from 'react-native';

export type CustomInputVariantProps = {
  defaultValue: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  password?: false | boolean;
  multiline?: false | boolean;
  inputType: string;
};
