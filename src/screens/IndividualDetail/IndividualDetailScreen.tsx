import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import {mockUser} from 'api/mockData';

const IndividualDetailScreen = ({route, navigation}: DetailsScreenProps) => {
  // const {userId, name} = route.params;
  const {userId, name, imageURL, bio, position, phone, mail, facebook} =
    mockUser;
  console.log(mockUser);
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingHorizontal: 100,
          paddingVertical: 150,
        }}>
        <Text>Individual Details Screen</Text>
        <Text>UserID: {userId}</Text>
        {/* <CustomButton
          variant="primary"
          title="Go Back"
          onPress={() => navigation.goBack()}
        /> */}
        <CustomButton
          variant="primary"
          title="Go To Other Individual Profile"
          onPress={() =>
            navigation.push('IndividualDetails', {
              userId: userId,
              name: 'Another User',
            })
          }
        />
        <CustomButton
          variant="primary"
          title="Go to Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ScreenLayout>
  );
};

export default IndividualDetailScreen;
