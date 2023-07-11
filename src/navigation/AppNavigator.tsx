import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home/HomeScreen';
import TeachersScreen from 'screens/Teachers/TeachersScreen';
import StaffScreen from 'screens/Staff/StaffScreen';
import NoticeScreen from 'screens/Notice/NoticeScreen';
import ResourceScreen from 'screens/Resource/ResourceScreen';
import IndividualDetailScreen from 'screens/IndividualDetail/IndividualDetailScreen';

type RootStackParamList = {
  Home: undefined;
  IndividualDetails: {userId: number; otherParam: string};
  Teacher: undefined;
  Staff: undefined;
  Resource: undefined;
  Notice: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type TeacherScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Teacher'
>;
export type StaffScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Staff'
>;
export type NoticeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Notice'
>;
export type ResourceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Resource'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'IndividualDetails'
>;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{title: 'Home'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="IndividualDetails"
          component={IndividualDetailScreen}
          options={{title: 'Individual'}}
        />
        <Stack.Screen
          name="Teacher"
          options={{title: 'Teachers'}}
          component={TeachersScreen}
        />
        <Stack.Screen
          name="Staff"
          options={{title: 'Staffs'}}
          component={StaffScreen}
        />
        <Stack.Screen
          name="Notice"
          options={{title: 'Notice Board'}}
          component={NoticeScreen}
        />
        <Stack.Screen
          name="Resource"
          options={{title: 'Resources'}}
          component={ResourceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
