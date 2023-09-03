import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NotificationScreenProps} from 'navigation/types';
import {CustomText} from 'ui/CustomText';
import CustomTextInput from 'ui/CustomTextInput';
import {MyCustomTextInput} from 'ui/MyCustomTextInput';
import CustomButton from 'ui/CustomButton';
import {MyCustomButton} from 'ui/MyCustomButton';

const NotificationScreen = ({route, navigation}: NotificationScreenProps) => {
  return (
    <View>
      <CustomText variant="bigTitle">This is Custom Text</CustomText>
      <CustomText variant="headline">This is Custom Text</CustomText>
      <CustomText variant="regularText">This is Custom Text</CustomText>
      <CustomText variant="smallText">This is Custom Text</CustomText>
      <MyCustomTextInput
        variant="secondary"
        textVariant="regularText"
        label="Username"
        placeholder="Enter your username"
        icon={true}
        containerStyle={{marginBottom: 20, padding: 20}}
      />
      <MyCustomTextInput
        variant="primary"
        textVariant="regularText"
        label="Username"
        placeholder="Enter your username"
        iconPosition="right"
        icon={true}
        onChangeText={() => {}}
        containerStyle={{marginBottom: 20, padding: 20}}
      />
      <CustomButton
        variant="primary"
        onPress={() => {}}
        title="Primary Button"
      />
      <CustomButton
        variant="secondary"
        onPress={() => {}}
        title="Secondary Button"
      />
      <MyCustomButton variant="primary">This Is Custom</MyCustomButton>
      <MyCustomButton variant="secondary" />
    </View>
  );
};

export default NotificationScreen;
