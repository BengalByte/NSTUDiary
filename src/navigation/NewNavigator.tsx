import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {
  DepartmentListScreen,
  DeptScreen,
  NoticeScreen,
  OfficeListScreen,
  ResourceScreen,
  StudentsListScreen,
  TeachersListScreen,
} from 'screens/DeptStackScreens';
import NotificationScreen from 'screens/DrawerNavigatorScreens/NotificationScreen';
import { ClubListScreen, EventListScreen, HomeScreen } from 'screens/HomeStackScreens';
import { useTypedSelector } from 'store/store';
import { theme } from 'utils/theme';

import { SearchListScreen, SearchScreen } from 'screens/SearchStackScreens';

import CustomIcon from 'components/CustomIcon';
import useResponsiveSize from 'hooks/useResponsiveSize';
import IndividualDetailsScreen from 'screens/DrawerNavigatorScreens/IndividualDetailsScreen';
import { ProfileScreen, ProfileSettingsScreen } from 'screens/ProfileStackScreens';

import { ForgotPasswordScreen, SignInScreen, SignUpScreen } from 'screens/AuthStackScreens';

import { CustomButton } from 'ui/CustomButton';
import { CustomText } from 'ui/CustomText';
import {
  AuthStackParamList,
  BottomTabParamList,
  DeptStackParamList,
  DrawerParamList,
  HomeStackParamList,
  ProfileStackParamList,
  SearchStackParamList,
} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const DeptStack = createNativeStackNavigator<DeptStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="EventList" component={EventListScreen} />
      <HomeStack.Screen name="ClubList" component={ClubListScreen} />
    </HomeStack.Navigator>
  );
};

const DeptScreenStack = () => {
  return (
    <DeptStack.Navigator>
      <DeptStack.Screen name="Department" component={DeptScreen} />
      <DeptStack.Screen name="DepartmentList" component={DepartmentListScreen} />
      <DeptStack.Screen name="TeacherList" component={TeachersListScreen} />
      <DeptStack.Screen name="StudentsList" component={StudentsListScreen} />
      <DeptStack.Screen name="Resource" component={ResourceScreen} />
      <DeptStack.Screen name="OfficeList" component={OfficeListScreen} />
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
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    </ProfileStack.Navigator>
  );
};

interface BottomTabInterface {
  label: string;
  name: keyof BottomTabParamList;
  component: React.FC;
  icon: string;
}

type BottomTabDataInterface = BottomTabInterface[];

const BottomTabData: BottomTabDataInterface = [
  { label: 'Home', name: 'HomeStack', component: HomeScreenStack, icon: 'day' },
  { label: 'Dept', name: 'DeptStack', component: DeptScreenStack, icon: 'night' },
  {
    label: 'Search',
    name: 'SearchStack',
    component: SearchScreenStack,
    icon: 'day',
  },
  {
    label: 'Profile',
    name: 'ProfileStack',
    component: ProfileScreenStack,
    icon: 'day',
  },
];

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { Rp } = useResponsiveSize();
  const currentTheme = useTypedSelector((state) => state.theme.currentTheme);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Rp(130),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: Rp(40),
        borderTopRightRadius: Rp(40),
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0.15, height: 0.15 },
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const TabBarIcon = options.tabBarIcon;
        const ButtonComp = options.tabBarButton;
        console.log('Options is =>', options);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {TabBarIcon && (
              <TabBarIcon
                focused={isFocused}
                color={
                  isFocused
                    ? theme[currentTheme].brand.primary.normal
                    : theme[currentTheme].brand.secondary.normal
                }
                size={Rp(50)}
              />
            )}
            <Text
              style={{
                color: isFocused
                  ? theme[currentTheme].brand.primary.normal
                  : theme[currentTheme].brand.secondary.normal,

                fontWeight: '500',
              }}
            >
              {typeof label === 'function'
                ? label({
                    focused: isFocused,
                    color: isFocused
                      ? theme[currentTheme].brand.primary.normal
                      : theme[currentTheme].brand.secondary.normal,

                    position: 'below-icon',
                    children: '',
                  })
                : label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      {BottomTabData.map((item, index) => {
        return (
          <BottomTab.Screen
            key={index}
            options={{
              tabBarShowLabel: false,
              tabBarLabel: item.label,
              tabBarIcon: (props) => (
                <CustomIcon name={item.icon} color={props.color} size={props.size} />
              ),
            }}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

const DrawerData = [
  {
    label: 'Home',
    icon: 'night',
    route: 'Main',
  },
  {
    label: 'Notification',
    icon: 'day',
    route: 'Notification',
  },
];

const MyDrawer = ({ state, navigation, descriptors }: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '', flex: 1 }}>
      {DrawerData.map((item, index) => {
        return (
          // <TouchableOpacity
          //   key={index}
          //   activeOpacity={0.5}
          //   style={{marginVertical: 10}}
          //   onPress={() => navigation.navigate(item.route)}>
          //   <Text style={{fontSize: 19}}>{item.label}</Text>
          // </TouchableOpacity>
          <CustomButton
            variant="tertiary"
            key={index}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.9}
          >
            <CustomText variant="smallText">{item.label}</CustomText>
          </CustomButton>
        );
      })}
    </SafeAreaView>
  );
};

export const RootDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MyDrawer {...props} />}
    >
      <Drawer.Screen name="Main" component={Tab} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="IndividualDetails" component={IndividualDetailsScreen} />
    </Drawer.Navigator>
  );
};
