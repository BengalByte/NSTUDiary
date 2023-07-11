import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StaffScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';

const StaffScreen = ({navigation}: StaffScreenProps) => {
  return (
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
            userId: 86,
            otherParam: 'Anything...',
          })
        }
      />
    </View>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({});
