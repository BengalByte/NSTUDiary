import {Image, StyleSheet, Text, View} from 'react-native';
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
import {useTypedSelector} from 'store/store';
import {theme} from 'utils/theme';
import ToggleTheme from 'ui/ToggleTheme';
import Rp from '../hooks/useResponsiveSize';
import useResponsiveSize from '@hooks/useResponsiveSize';
import SignIn from 'screens/SignIn/SignIn';

type RootStackParamList = {
  Home: undefined;
  IndividualDetails: {userId: string; name: string};
  Teacher: undefined;
  Staff: undefined;
  Resource: undefined;
  Notice: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
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

type HeaderViewProps = {
  children: string;
  color: string;
  size: number;
  // tintColor: string;
};

const HeaderView = (props: HeaderViewProps) => {
  console.log('The Props', props);
  return (
    <View style={{height: props.size, justifyContent: 'center'}}>
      <Text style={{fontSize: props.size / 2, color: props.color}}>
        {props.children}
      </Text>
    </View>
  );
};

const AppNavigator = () => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme[currentTheme].base,
          },
          headerTintColor: theme[currentTheme].textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => <ToggleTheme />,
          animation: 'slide_from_right',
          headerTitle: props => (
            <HeaderView
              size={Rp(110)}
              color={theme[currentTheme].textColor}
              {...props}
            />
          ),
        }}>
        {true ? (
          <>
            <Stack.Screen
              name="SignIn"
              options={{
                title: 'Sign In',
              }}
              component={SignIn}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{
                title: 'Home',
              }}
              component={HomeScreen}
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
            <Stack.Screen
              name="IndividualDetails"
              component={IndividualDetailScreen}
              options={({navigation, route}) => ({title: route.params.name})}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
