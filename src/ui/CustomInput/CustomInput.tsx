import React from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import PrimaryInput from './Variant/PrimaryInput';
import SecondaryInput from './Variant/SecondaryInput';
import {CustomInputVariantProps} from './CustomInput.types';
// import { CustomButtonVariantProps } from './CustomButton.types';

interface CustomInputProps {
  defaultValue?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const VARIANT_COMPONENT_MAP: Record<
  string,
  React.ComponentType<CustomInputVariantProps>
> = {
  primary: PrimaryInput,
  secondary: SecondaryInput,
};

const CustomInput: React.FC<CustomInputProps> = ({
  defaultValue,
  onChangeText,
  placeholder,
  style,
  variant,
}) => {
  const InputComponent = VARIANT_COMPONENT_MAP[variant] || PrimaryInput;

  return (
    <InputComponent
      defaultValue={defaultValue ?? ''}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default CustomInput;
