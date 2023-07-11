import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from 'ui/CustomButton';
import {ResourceScreenProps} from 'navigation/AppNavigator';

const ResourceScreen = ({navigation}: ResourceScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Resource Screen</Text>
      <CustomButton
        variant="secondary"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ResourceScreen;

const styles = StyleSheet.create({});
