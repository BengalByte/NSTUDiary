import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TeacherScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import CustomIcon from 'components/CustomIcon';
import IndividualCard from 'ui/IndividualCard';
import {mockUser} from 'api/mockData';

const TeachersScreen = ({navigation}: TeacherScreenProps) => {
  const {bio, facebook, imageURL, mail, name, phone, position, userId} =
    mockUser;
  return (
    <ScreenLayout>
      <View style={styles.body}>
        <IndividualCard
          imageUrl={imageURL}
          name={name}
          position={position}
          pressHandler={() =>
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

export default TeachersScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: 120,
  },
});
