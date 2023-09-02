import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NotificationScreenProps} from 'navigation/types';
import {CustomText} from 'ui/CustomText';
import CustomTextInput from 'ui/CustomTextInput';
import {MyCustomTextInput} from 'ui/MyCustomTextInput';

const NotificationScreen = ({route, navigation}: NotificationScreenProps) => {
  return (
    <View>
      <CustomText variant="bigTitle">This is Custom Text</CustomText>
      <CustomText variant="headline">This is Custom Text</CustomText>
      <CustomText variant="regularText">This is Custom Text</CustomText>
      <CustomText variant="smallText">This is Custom Text</CustomText>
      {/* <CustomTextInput
        inputType="text"
        label="Label"
        variant="primary"
        onChangeText={() => {}}
        placeholder="This is placeholder"
      />
      <CustomTextInput
        inputType="text"
        label="Label"
        variant="primary"
        onChangeText={() => {}}
        placeholder="This is placeholder"
      /> */}
      <MyCustomTextInput
        variant="secondary"
        textVariant="regularText" // Choose the appropriate variant from your textStyles
        label="Username"
        placeholder="Enter your username"
        icon={true}
        // value={'abc'}
        // onChangeText={() => {}}
        containerStyle={{marginBottom: 20, padding: 20}}
      />
      <MyCustomTextInput
        variant="primary"
        textVariant="regularText" // Choose the appropriate variant from your textStyles
        label="Username"
        placeholder="Enter your username"
        iconPosition="right"
        // value={'abc'}
        icon={true}
        onChangeText={() => {}}
        containerStyle={{marginBottom: 20, padding: 20}}
      />
      {/* <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'DeptStack',
            params: {screen: 'DepartmentList'},
          })
        }
      /> */}
    </View>
  );
};

export default NotificationScreen;
