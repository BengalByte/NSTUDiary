import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TeacherScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import CustomIcon from 'components/CustomIcon';

const TeachersScreen = ({navigation}: TeacherScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 120,
        }}>
        <Text>This is Teacher Screen</Text>
        <CustomIcon name="day" size={50} color={'red'} />
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
              name: 'Mr. Y',
            })
          }
        />
      </View>
    </ScreenLayout>
  );
};

export default TeachersScreen;

const styles = StyleSheet.create({});