import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StaffScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';

const StaffScreen = ({navigation}: StaffScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 120,
        }}>
        <Text>This is Staff Screen</Text>
        <CustomButton
          variant="secondary"
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />

        <CustomButton
          variant="secondary"
          title="Go to Staff1 Details"
          onPress={() =>
            navigation.navigate('IndividualDetails', {
              userId: '86',
              name: 'Mr. X',
            })
          }
        />
      </View>
    </ScreenLayout>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({});
