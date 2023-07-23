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
import ProfileDataCard from 'components/ProfileDataCard';

const IndividualDetailScreen = ({route, navigation}: DetailsScreenProps) => {
  return (
    <ScreenLayout>
      <ProfileDataCard />
    </ScreenLayout>
  );
};

export default IndividualDetailScreen;
