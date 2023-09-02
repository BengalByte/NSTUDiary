import React from 'react';
import {TextInput, TextInputProps, View, Text, ViewStyle} from 'react-native';
import {useTypedSelector} from 'store/store';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {getTextStyles} from 'ui/CustomText';
import {
  getTextInputStyles,
  getIconStyle,
  getInputStyle,
  getTextInputIconPosition,
} from './textInputStyles';
import CustomIcon from 'components/CustomIcon';

interface CustomTextInputProps extends TextInputProps {
  textVariant: keyof ReturnType<typeof getTextStyles>;
  variant: keyof ReturnType<typeof getTextInputStyles>;
  label: string;
  containerStyle?: ViewStyle;
  icon: boolean;
  iconPosition?: keyof ReturnType<typeof getTextInputIconPosition>;
}

export const MyCustomTextInput: React.FC<CustomTextInputProps> = ({
  textVariant,
  icon,
  variant,
  label,
  style,
  containerStyle,
  iconPosition = 'left',
  ...rest
}) => {
  const mode = useTypedSelector(state => state.theme.currentTheme);
  const {Rp, Rh} = useResponsiveSize();
  const textStyles = getTextStyles({mode, Rp, Rh});
  const textBoxStyles = getTextInputStyles({mode, Rp, Rh});
  const textStyle: TextInputProps['style'] = textStyles[textVariant];
  const textBoxStyle: ViewStyle = textBoxStyles[variant];
  const iconPositionStyles = getTextInputIconPosition();
  const iconPositions = iconPositionStyles[iconPosition];
  const iconStyle = getIconStyle({mode, Rp, Rh});
  const inputStyle = getInputStyle();
  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <View style={textBoxStyle}>
        <View style={iconPositions}>
          {icon && (
            <CustomIcon name="day" size={Rp(50)} style={iconStyle.icon} />
          )}
          <TextInput style={[textStyle, inputStyle.input, style]} {...rest} />
        </View>
      </View>
    </View>
  );
};
