import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleTheme from 'ui/ToggleTheme';
import CustomButton from 'ui/CustomButton';
import {HomeScreenProps} from 'navigation/AppNavigator';
import ScreenLayout from 'screens/ScreenLayout';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          alignItems: 'center',
          // justifyContent: 'space-evenly',
        }}>
        <CustomButton
          onPress={() => {
            console.log('first');
          }}
          variant="primary"
          title="This is Custom"
        />
        <CustomButton
          title="Teachers"
          onPress={() => navigation.navigate('Teacher')}
          variant="primary"
        />
        <CustomButton
          title="Staff"
          onPress={() => navigation.navigate('Staff')}
          variant="primary"
        />
        <CustomButton
          title="Notice"
          onPress={() => navigation.navigate('Notice')}
          variant="primary"
        />
        <CustomButton
          title="Resource"
          onPress={() => navigation.navigate('Resource')}
          variant="primary"
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
