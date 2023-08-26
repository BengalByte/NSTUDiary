import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/Test/HomeScreen';
import EventListScreen from 'screens/Test/EventListScreen';
import NotificationScreen from 'screens/Test/NotificationScreen';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="EventList" component={EventListScreen} />
    </HomeStack.Navigator>
  );
};

const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="HomeTabNav" component={HomeScreenStack} />
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
    </Drawer.Navigator>
  );
};
