import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from 'ui/CustomInput';
import ScreenLayout from 'screens/ScreenLayout';

const SignIn = () => {
  return (
    <ScreenLayout>
      <View>
        {/* <Text style={{fontSize: 30}}>SignIn</Text> */}
        <CustomInput
          variant="primary"
          onChangeText={() => {}}
          placeholder="Placeholder"
        />
        <CustomInput
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
