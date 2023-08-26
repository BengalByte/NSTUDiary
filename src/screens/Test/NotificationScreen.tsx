import {View, Text} from 'react-native';
import React from 'react';
import TestingText from 'ui/Test/TestingText';

const NotificationScreen = () => {
  return (
    <View>
      <TestingText
        variant="headline"
        // style={{color: 'black'}}
        numberOfLines={1}>
        Noification
      </TestingText>
    </View>
  );
};

export default NotificationScreen;
