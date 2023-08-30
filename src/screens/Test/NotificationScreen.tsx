import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import TestingText from 'ui/Test/TestingText';
import {NotificationScreenProps} from 'navigation/types';

const NotificationScreen = ({route, navigation}: NotificationScreenProps) => {
  return (
    <View>
      <TestingText
        variant="headline"
        // style={{color: 'black'}}
        numberOfLines={1}>
        Noification
      </TestingText>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'DeptStack',
            params: {screen: 'DepartmentList'},
          })
        }
      />
    </View>
  );
};

export default NotificationScreen;
