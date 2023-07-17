import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomInput from 'ui/CustomInput';
import ScreenLayout from 'screens/ScreenLayout';
import CustomTextInput from 'ui/CustomTextInput';

const SignIn = () => {
  return (
    <ScreenLayout>
      <View>
        {/* <Text style={{fontSize: 30}}>SignIn</Text> */}
        <CustomTextInput
          label="Email"
          variant="primary"
          onChangeText={() => {}}
          placeholder="Placeholder"
        />
        <CustomTextInput
          label="Password"
          variant="secondary"
          onChangeText={() => {}}
          placeholder="Placeholder"
        />
      </View>
    </ScreenLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
