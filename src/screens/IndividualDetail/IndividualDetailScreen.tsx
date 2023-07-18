import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import {mockUser} from 'api/mockData';
import Avatar from 'ui/Avatar';
import InfoCard from 'ui/InfoCard';
import useResponsiveSize from 'hooks/useResponsiveSize';

const IndividualDetailScreen = ({route, navigation}: DetailsScreenProps) => {
  // const {userId, name} = route.params;
  const {userId, name, imageURL, bio, position, phone, mail, facebook} =
    mockUser;
  const {Rp} = useResponsiveSize();
  console.log(mockUser);
  const styles = StyleSheet.create({
    name: {
      fontSize: Rp(55),
      fontWeight: 'bold',
    },
    position: {
      fontSize: Rp(40),
    },
  });
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
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{userId}</Text>
        <Avatar imageUrl={imageURL} />
        <InfoCard
          icon="day"
          content="0123456"
          onPress={() => console.log('Phone')}
        />
        <InfoCard
          icon="night"
          content="rifat.hasib@gmail.com"
          onPress={() => console.log('mail')}
        />
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
