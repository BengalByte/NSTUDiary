import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from 'ui/CustomButton';
import {NoticeScreenProps} from 'navigation/AppNavigator';

const NoticeScreen = ({navigation}: NoticeScreenProps) => {
  return (
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
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({});
