import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Test/HomeScreen';
import EventListScreen from 'screens/Test/EventListScreen';
import NotificationScreen from 'screens/Test/NotificationScreen';
import DeptScreen from 'screens/Test/DeptScreen';
import DepartmentListScreen from 'screens/Test/DepartmentListScreen';
import TeachersListScreen from 'screens/Test/TeachersListScreen';
import StudentsListScreen from 'screens/Test/StudentsListScreen';
import ResourceScreen from 'screens/Test/ResourceScreen';
import OfficeListScreen from 'screens/Test/OfficeListScreen';
import NoticeScreen from 'screens/Test/NoticeScreen';
import SearchScreen from 'screens/Test/SearchScreen';
import SearchListScreen from 'screens/Test/SearchListScreen';
import ProfileScreen from 'screens/Test/ProfileScreen';
import ProfileSettingsScreen from 'screens/Test/ProfileSettingsScreen';
import IndividualDetailsScreen from 'screens/Test/IndividualDetailsScreen';
import {Text, TouchableOpacity, View} from 'react-native';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DeptStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="EventList" component={EventListScreen} />
    </HomeStack.Navigator>
  );
};

const DeptScreenStack = () => {
  return (
    <DeptStack.Navigator>
      <DeptStack.Screen name="Department" component={DeptScreen} />
      <DeptStack.Screen
        name="DepartmentList"
        component={DepartmentListScreen}
      />
      <DeptStack.Screen name="TeacherList" component={TeachersListScreen} />
      <DeptStack.Screen name="StudentsList" component={StudentsListScreen} />
      <DeptStack.Screen name="Resource" component={ResourceScreen} />
      <DeptStack.Screen name="OfficeListScreen" component={OfficeListScreen} />
      <DeptStack.Screen name="Notice" component={NoticeScreen} />
    </DeptStack.Navigator>
  );
};

const SearchScreenStack = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchList" component={SearchListScreen} />
    </SearchStack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
      />
    </ProfileStack.Navigator>
  );
};

const BottomTabData = [
  {label: 'Home', name: 'HomeStack', component: HomeScreenStack},
  {label: 'Dept', name: 'DeptStack', component: DeptScreenStack},
  {label: 'Search', name: 'SearchStack', component: SearchScreenStack},
  {label: 'Profile', name: 'ProfileStack', component: ProfileScreenStack},
];

const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {BottomTabData.map((item, index) => {
        return (
          <BottomTab.Screen
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  style={{
                    backgroundColor: 'red',
                    width: '25%',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center'}}>{item.label}</Text>
                </TouchableOpacity>
              ),
            }}
            name={item.name}
            component={item.component}
          />
        );
      })}
      {/* <BottomTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => (
            <TouchableOpacity
              {...props}
              style={{
                backgroundColor: 'red',
                width: '25%',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>text</Text>
            </TouchableOpacity>
          ),
        }}
        name="HomeStack"
        component={HomeScreenStack}
      />
      <BottomTab.Screen name="DeptStack" component={DeptScreenStack} />
      <BottomTab.Screen name="SearchStack" component={SearchScreenStack} />
      <BottomTab.Screen name="ProfileStack" component={ProfileScreenStack} /> */}
    </BottomTab.Navigator>
  );
};

export const RootDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={Tab} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen
        name="IndividualDetails"
        component={IndividualDetailsScreen}
      />
    </Drawer.Navigator>
  );
};
