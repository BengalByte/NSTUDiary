import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HomeScreenProps} from 'navigation/types';

const HomeScreen = ({route, navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('DeptStack', {screen: 'Department'})}
        style={{width: 100, height: 100, backgroundColor: 'red'}}
      />
    </View>
  );
};

export default HomeScreen;
