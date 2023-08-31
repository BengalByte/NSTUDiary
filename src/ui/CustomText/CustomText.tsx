import {Text, TextStyle} from 'react-native';
import React from 'react';
import {TextProps} from 'react-native';
import {getTextStyles} from './textStyles';
import {useTypedSelector} from 'store/store';
import useResponsiveSize from 'hooks/useResponsiveSize';

interface CustomTextProps extends TextProps {
  variant: keyof ReturnType<typeof getTextStyles>;
  children: React.ReactNode;
}

export const CustomText: React.FC<CustomTextProps> = ({
  variant,
  children,
  style,
  ...rest
}) => {
  const mode = useTypedSelector(state => state.theme.currentTheme);
  const {Rp, Rh} = useResponsiveSize();
  const textStyles = getTextStyles({mode, Rp, Rh});
  const textStyle: TextStyle = textStyles[variant];
  return (
    <Text style={[textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};
