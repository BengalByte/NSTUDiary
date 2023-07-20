import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenProps} from 'navigation/AppNavigator';
import CustomButton from 'ui/CustomButton';
import ScreenLayout from 'screens/ScreenLayout';
import {mockUser} from 'api/mockData';
import Avatar from 'ui/Avatar';
import InfoCard from 'ui/InfoCard';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';

const IndividualDetailScreen = ({route, navigation}: DetailsScreenProps) => {
  const {name} = route.params;
  const {userId, imageURL, bio, position, phone, mail, facebook} = mockUser;
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  console.log(mockUser);
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      // paddingHorizontal: 100,
      // paddingVertical: 150,
    },
    name: {
      fontSize: Rp(55),
      fontWeight: 'bold',
      color: theme[currentTheme].textColor,
    },
    position: {
      fontSize: Rp(40),
      alignSelf: 'flex-start',
      textAlign: 'left',
      color: theme[currentTheme].textColor,
    },
    title: {
      fontSize: Rp(35),
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      marginTop: Rp(30),
      color: theme[currentTheme].textColor,
    },
    bio: {
      fontSize: Rp(35),
      textAlign: 'justify',
      marginTop: Rp(30),
      color: theme[currentTheme].textColor,
    },
    userName: {
      fontSize: Rp(40),
      textAlign: 'center',
      color: theme[currentTheme].textColor,
    },
    infoCardBody: {
      marginTop: Rp(40),
    },
  });
  return (
    <ScreenLayout>
      <View style={styles.body}>
        <Avatar style={{marginTop: Rp(30)}} imageUrl={imageURL} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.userName}>{userId}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <Text style={styles.title}>Position</Text>
        <Text style={styles.position}>{position}</Text>
        <View style={styles.infoCardBody}></View>
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
          title="Go to Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ScreenLayout>
  );
};

export default IndividualDetailScreen;
