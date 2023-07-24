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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomIcon from 'components/CustomIcon';
import ProfileScreen from 'screens/Profile';
import SearchScreen from 'screens/Search/SearchScreen';

type DeptStackParamList = {
  Home: undefined;
  IndividualDetails: {userId: string; name: string};
  Teacher: undefined;
  Staff: undefined;
  Resource: undefined;
  Notice: undefined;
  SignIn: undefined;
};

type RootTabParamList = {
  Department: undefined;
  Profile: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const DeptStack = createNativeStackNavigator<DeptStackParamList>();
export type HomeScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'Home'
>;
export type SignInScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'SignIn'
>;
export type TeacherScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'Teacher'
>;
export type StaffScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'Staff'
>;
export type NoticeScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'Notice'
>;
export type ResourceScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'Resource'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  DeptStackParamList,
  'IndividualDetails'
>;

const DeptStackScreen = () => {
  const {Rp} = useResponsiveSize();
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const token = useTypedSelector(state => state.token.token);
  return (
    <DeptStack.Navigator
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
        // headerShown: false,
      }}>
      {!token ? (
        <>
          <DeptStack.Screen
            name="SignIn"
            options={{
              title: 'Sign In',
            }}
            component={SignIn}
          />
        </>
      ) : (
        <>
          <DeptStack.Screen
            name="Home"
            options={{
              title: 'Home',
            }}
            component={HomeScreen}
          />
          <DeptStack.Screen
            name="Teacher"
            options={{title: 'Teachers'}}
            component={TeachersScreen}
          />
          <DeptStack.Screen
            name="Staff"
            options={{title: 'Staffs'}}
            component={StaffScreen}
          />
          <DeptStack.Screen
            name="Notice"
            options={{title: 'Notice Board'}}
            component={NoticeScreen}
          />
          <DeptStack.Screen
            name="Resource"
            options={{title: 'Resources'}}
            component={ResourceScreen}
          />
          <DeptStack.Screen
            name="IndividualDetails"
            component={IndividualDetailScreen}
            options={({navigation, route}) => ({title: route.params.name})}
          />
        </>
      )}
    </DeptStack.Navigator>
  );
};

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

type TabBarViewProps = {
  color: string;
  size: number;
  // tintColor: string;
};

const TabBarView = (props: TabBarViewProps) => {
  console.log('The Props', props);
  return (
    <View
      style={{
        height: props.size,
        backgroundColor: props.color,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // position: 'absolute',
        // shadowColor: 'black',
        // elevation: 10,
      }}></View>
  );
};

type SearchStackParamList = {
  Search: undefined;
  IndividualList: undefined;
  IndividualDetails: undefined;
};

const SearchStack = createNativeStackNavigator<SearchStackParamList>();
export type SearchScreenProps = NativeStackScreenProps<
  SearchStackParamList,
  'Search'
>;
export type IndividualListScreenProps = NativeStackScreenProps<
  SearchStackParamList,
  'IndividualList'
>;
export type IndividualDetailsScreenProps = NativeStackScreenProps<
  SearchStackParamList,
  'IndividualDetails'
>;

const SearchStackScreen = () => {
  return <View></View>;
};

const AppNavigator = () => {
  const currentTheme = useTypedSelector(state => state.theme.currentTheme);
  const {Rp} = useResponsiveSize();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Department') {
              iconName = focused ? 'day' : 'night';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'day' : 'night';
            } else if (route.name === 'Search') {
              iconName = focused ? 'day' : 'night';
            }

            // You can return any component that you like here!
            return <CustomIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            borderTopColor: 'transparent',
          },
          tabBarBackground: () => (
            <TabBarView size={100} color={theme[currentTheme].base10} />
          ),
        })}>
        <Tab.Screen name="Department" component={DeptStackScreen} />

        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          // options={{tabBarBadge: 3}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
