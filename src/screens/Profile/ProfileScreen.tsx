import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mockUser} from 'api/mockData';
import Avatar from 'ui/Avatar';
import IndividualDetailScreen from 'screens/IndividualDetail/IndividualDetailScreen';
import ProfileDataCard from 'components/ProfileDataCard';
import {theme} from 'utils/theme';
import {useTypedSelector} from 'store/store';
import ScreenLayout from 'screens/ScreenLayout';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <ScreenLayout>
      <ProfileDataCard />
    </ScreenLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
