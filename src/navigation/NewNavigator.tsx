// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from 'screens/Test/HomeScreen';
// import NotificationScreen from 'screens/Test/NotificationScreen';
// import { NavigationContainer } from '@react-navigation/native';

// type AuthStackParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
//   ForgotPassword: undefined;
// };

// const Drawer = createDrawerNavigator();

// export const RootDrawer = () => {
//   return (
//     <NavigationContainer>

//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Home" component={NotificationScreen} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
