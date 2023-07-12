import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from 'ui/CustomButton';
import {NoticeScreenProps} from 'navigation/AppNavigator';
import ScreenLayout from 'screens/ScreenLayout';

const NoticeScreen = ({navigation}: NoticeScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 120,
        }}>
        <Text>This is Notice Screen</Text>
        <CustomButton
          variant="primary"
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScreenLayout>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({});
