import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ToggleTheme from 'ui/ToggleTheme';
import CustomButton from 'ui/CustomButton';
import {HomeScreenProps} from 'navigation/AppNavigator';
import ScreenLayout from 'screens/ScreenLayout';
import Card from 'ui/Card';
import useResponsiveSize from 'hooks/useResponsiveSize';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {Rp} = useResponsiveSize();
  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={{
          marginTop: Rp(80),
          flex: 1,
          flexDirection: 'row',
          gap: Rp(60),
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        <Card
          style={{
            width: Rp(380),
            height: Rp(380),
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('Resource')}>
            <Text style={{fontSize: Rp(50)}}>Resource</Text>
          </TouchableOpacity>
        </Card>
        <Card
          style={{
            width: Rp(380),
            height: Rp(380),
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('Teacher')}>
            <Text style={{fontSize: Rp(50)}}>Teacher</Text>
          </TouchableOpacity>
        </Card>

        <Card
          style={{
            width: Rp(380),
            height: Rp(380),
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('Staff')}>
            <Text style={{fontSize: Rp(50)}}>Staff</Text>
          </TouchableOpacity>
        </Card>
        <Card
          style={{
            width: Rp(380),
            height: Rp(380),
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('Notice')}>
            <Text style={{fontSize: Rp(50)}}>Notice</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
