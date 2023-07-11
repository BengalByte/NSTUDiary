import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TeacherScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';

const TeachersScreen = ({navigation}: TeacherScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Teacher Screen</Text>
      <CustomButton
        variant="secondary"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <CustomButton
        variant="secondary"
        title="Go to Teacher1 Details"
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

export default TeachersScreen;

const styles = StyleSheet.create({});
