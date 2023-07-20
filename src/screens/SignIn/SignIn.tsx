import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenLayout from 'screens/ScreenLayout';
import CustomTextInput from 'ui/CustomTextInput';
import useResponsiveSize from 'hooks/useResponsiveSize';
import CustomButton from 'ui/CustomButton';
import {setToken} from 'store/slices/TokenSlice';
import {useAppDispatch} from 'store/store';
import Card from 'ui/Card';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const signIn = () => dispatch(setToken('String'));
  const {Rp} = useResponsiveSize();
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <ScreenLayout>
      <View style={styles.body}>
        {/* <Text style={{fontSize: 30}}>SignIn</Text> */}
        <Card
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View> */}
          <CustomTextInput
            inputType="text"
            label="Email"
            variant="primary"
            onChangeText={() => {}}
            placeholder="example@email.com"
          />
          <CustomTextInput
            viewStyle={{marginTop: Rp(30)}}
            inputType="password"
            label="Password"
            variant="secondary"
            onChangeText={() => {}}
            placeholder="secret"
          />
          <CustomButton onPress={signIn} title="Sign In" variant="primary" />
          {/* </View> */}
        </Card>
      </View>
    </ScreenLayout>
  );
};

export default SignIn;
