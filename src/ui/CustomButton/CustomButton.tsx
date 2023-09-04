import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {getButtonVariants} from './buttonStyle';
import {useTypedSelector} from 'store/store';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {getTextStyles} from 'ui/CustomText';

interface CustomButtonInterface extends TouchableOpacityProps {
  variant: keyof ReturnType<typeof getButtonVariants>;
  textVariant?: keyof ReturnType<typeof getTextStyles>;
}

export const CustomButton = ({
  variant,
  textVariant = 'regularText',
  ...rest
}: CustomButtonInterface) => {
  const mode = useTypedSelector(state => state.theme.currentTheme);
  const {Rp, Rh} = useResponsiveSize();
  const buttonVariantStyles = getButtonVariants({mode, Rp, Rh});
  const buttonVariantStyle = buttonVariantStyles[variant];
  return (
    <TouchableOpacity style={[buttonVariantStyle]} {...rest}></TouchableOpacity>
  );
};
