import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from 'ui/CustomButton';
import {ResourceScreenProps} from 'navigation/AppNavigator';
import ScreenLayout from 'screens/ScreenLayout';

const ResourceScreen = ({navigation}: ResourceScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 120,
        }}>
        <CustomButton
          variant="secondary"
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScreenLayout>
  );
};

export default ResourceScreen;

const styles = StyleSheet.create({});
