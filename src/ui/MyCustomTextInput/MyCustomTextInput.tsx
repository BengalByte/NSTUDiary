import React from 'react';
import {TextInput, TextInputProps, View, Text, ViewStyle} from 'react-native';
// import { getTextStyles } from '';
import {useTypedSelector} from 'store/store';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {getTextStyles} from 'ui/CustomText';
import {getTextInputStyles} from './textInputStyles';

interface CustomTextInputProps extends TextInputProps {
  textVariant: keyof ReturnType<typeof getTextStyles>;
  variant: keyof ReturnType<typeof getTextInputStyles>;
  label: string;
  containerStyle?: ViewStyle;
}

export const MyCustomTextInput: React.FC<CustomTextInputProps> = ({
  textVariant,
  variant,
  label,
  style,
  containerStyle,
  ...rest
}) => {
  const mode = useTypedSelector(state => state.theme.currentTheme);
  const {Rp, Rh} = useResponsiveSize();
  const textStyles = getTextStyles({mode, Rp, Rh});
  const textBoxStyles = getTextInputStyles({mode, Rp, Rh});
  const textStyle: TextInputProps['style'] = textStyles[textVariant];
  const textBoxStyle: ViewStyle = textBoxStyles[variant];

  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <View style={textBoxStyle}>
        <TextInput style={[textStyle, style]} {...rest} />
      </View>
    </View>
  );
};
