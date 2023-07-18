import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenLayout from 'screens/ScreenLayout';
import CustomTextInput from 'ui/CustomTextInput';

const SignIn = () => {
  return (
    <ScreenLayout>
      <View>
        {/* <Text style={{fontSize: 30}}>SignIn</Text> */}
        <CustomTextInput
          inputType="text"
          label="Email"
          variant="primary"
          onChangeText={() => {}}
          placeholder="example@email.com"
        />
        <CustomTextInput
          inputType="password"
          label="Password"
          variant="secondary"
          onChangeText={() => {}}
          placeholder="secret"
        />
      </View>
    </ScreenLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
