import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import CustomInput from 'ui/CustomInput';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

type CustomTextInputProps = {
  label: string;
  inputType: string;
  defaultValue?: string;
  variant: 'primary' | 'secondary';
  placeholder: string;
  onChangeText: () => void;
  viewStyle?: ViewStyle;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  inputType,
  defaultValue,
  variant,
  placeholder,
  onChangeText,
  viewStyle,
}) => {
  const {Rp} = useResponsiveSize();
  const themeColor = useTypedSelector(state => state.theme.currentTheme);
  const styles = StyleSheet.create({
    text: {
      fontSize: Rp(35),
      fontWeight: 'bold',
      color: theme[themeColor].textColor,
      marginVertical: Rp(15),
    },
  });

  return (
    <View style={[viewStyle]}>
      <Text style={styles.text}>{label}</Text>
      <CustomInput
        inputType={inputType}
        variant={variant}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default CustomTextInput;
