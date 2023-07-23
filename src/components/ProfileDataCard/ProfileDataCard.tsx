import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InfoCard from 'ui/InfoCard';
import Avatar from 'ui/Avatar';
import {useTypedSelector} from 'store/store';
import {mockUser} from 'api/mockData';
import useResponsiveSize from 'hooks/useResponsiveSize';
import {theme} from 'utils/theme';

type Props = {};

const ProfileDataCard = (props: Props) => {
  const {name, userId, imageURL, bio, position, phone, mail, facebook} =
    mockUser;
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  console.log(mockUser);
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    name: {
      marginTop: Rp(20),
      fontSize: Rp(55),
      fontWeight: 'bold',
      color: theme[currentTheme].textColor,
    },
    position: {
      width: Rp(900),
      fontSize: Rp(40),
      textAlign: 'left',
      color: theme[currentTheme].textColor,
    },
    title: {
      fontSize: Rp(35),
      width: Rp(900),
      fontWeight: 'bold',
      marginTop: Rp(30),
      color: theme[currentTheme].textColor,
    },
    bio: {
      fontSize: Rp(35),
      textAlign: 'justify',
      marginTop: Rp(30),
      color: theme[currentTheme].textColor,
      width: Rp(900),
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
    <View style={styles.body}>
      <Avatar style={{marginTop: Rp(80)}} imageUrl={imageURL} />
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
    </View>
  );
};

export default ProfileDataCard;

const styles = StyleSheet.create({});
