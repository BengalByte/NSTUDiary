import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mockUser} from 'api/mockData';
import Avatar from 'ui/Avatar';
import IndividualDetailScreen from 'screens/IndividualDetail/IndividualDetailScreen';
import ProfileDataCard from 'components/ProfileDataCard';

type Props = {};

const ProfileScreen = (props: Props) => {
  const {name, bio, facebook, imageURL, mail, phone, position, userId} =
    mockUser;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProfileDataCard />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
