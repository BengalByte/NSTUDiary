import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {TextProps} from 'react-native';
import {getTextStyles} from './textStyles';
import {useTypedSelector} from 'store/store';

interface TestingTextProps extends TextProps {
  variant: keyof ReturnType<typeof getTextStyles>;
  children: React.ReactNode;
}

const TestingText: React.FC<TestingTextProps> = ({
  variant,
  children,
  style,
  ...rest
}) => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const textStyles = getTextStyles(currentTheme);
  const textStyle: TextStyle = textStyles[variant];
  return (
    <Text style={[textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TestingText;
