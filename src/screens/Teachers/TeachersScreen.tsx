import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TeacherScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import CustomIcon from 'components/CustomIcon';
import IndividualCard from 'ui/IndividualCard';

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
        <IndividualCard
          imageUrl="https://randomuser.me/api/portraits/lego/4.jpg"
          name="Teacher"
          position="Associate Professor"
          pressHandler={() =>
            navigation.navigate('IndividualDetails', {
              userId: '86',
              name: 'Mr. Y',
            })
          }
        />
        <CustomButton
          variant="secondary"
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <CustomButton
          variant="secondary"
          title="Go to Teacher1 Details"
          onPress={() => {}}
        />
      </View>
    </ScreenLayout>
  );
};

export default TeachersScreen;

const styles = StyleSheet.create({});
