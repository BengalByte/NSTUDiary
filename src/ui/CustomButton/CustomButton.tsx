import React from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import {CustomButtonVariantProps} from './CustomButton.types';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  variant: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const VARIANT_COMPONENT_MAP: Record<
  string,
  React.ComponentType<CustomButtonVariantProps>
> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  // tertiary: CustomTertiaryButton,
  // quaternary: CustomQuaternaryButton,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  variant,
}) => {
  const ButtonComponent = VARIANT_COMPONENT_MAP[variant] || PrimaryButton;

  return (
    <ButtonComponent
      onPress={onPress}
      title={title}
      style={style}
      textStyle={textStyle}
    />
  );
};

export default CustomButton;
