import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from 'ui/CustomInput';

type CustomTextInputProps = {
  label: string;
  inputType: string;
  defaultValue?: string;
  variant: 'primary' | 'secondary';
  placeholder: string;
  onChangeText: () => void;
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  defaultValue,
  variant,
  placeholder,
  onChangeText,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <CustomInput
        variant={variant}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
