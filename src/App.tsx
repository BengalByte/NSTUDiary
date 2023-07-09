import {
  NavigationContainer,
  NavigationProp,
  NavigatorScreenParams,
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
// import CustomButton from 'ui/CustomButtons';
import CustomButton from '@ui/CustomButton';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import HomeScreenNew from 'screens/Home/HomeScreenNew';
import store from 'store/store';
// import {store} from 'store/store';

type RootStackParamList = {
  Home: undefined;
  IndividualDetails: {userId: number; otherParam: string};
  Teacher: undefined;
  Staff: undefined;
  Resource: undefined;
  Notice: undefined;
};

interface User {
  name: string;
  profession: string;
  phone: string;
  email: string;
  facebook: string;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type TeacherScreenProps = NativeStackScreenProps<RootStackParamList, 'Teacher'>;
type StaffScreenProps = NativeStackScreenProps<RootStackParamList, 'Staff'>;
type NoticeScreenProps = NativeStackScreenProps<RootStackParamList, 'Notice'>;
type ResourceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Resource'
>;
type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'IndividualDetails'
>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      {/* <CustomButton /> */}
      <CustomButton
        onPress={() => {
          console.log('first');
        }}
        title="This is Custom"
      />
      <CustomButton
        title="Teachers"
        onPress={() => navigation.navigate('Teacher')}
      />
      <CustomButton
        title="Staff"
        onPress={() => navigation.navigate('Staff')}
      />
      <CustomButton
        title="Notice"
        onPress={() => navigation.navigate('Notice')}
      />
      <CustomButton
        title="Resource"
        onPress={() => navigation.navigate('Resource')}
      />
    </View>
  );
}

function TeacherScreen({navigation}: TeacherScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Teacher Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Teacher1 Details"
        onPress={() =>
          navigation.navigate('IndividualDetails', {
            userId: 86,
            otherParam: 'Anything...',
          })
        }
      />
    </View>
  );
}

function StaffScreen({navigation}: StaffScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Staff Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button
        title="Go to Staff1 Details"
        onPress={() =>
          navigation.navigate('IndividualDetails', {
            userId: 86,
            otherParam: 'Anything...',
          })
        }
      />
    </View>
  );
}

function NoticeScreen({navigation}: NoticeScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Notice Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function ResourceScreen({navigation}: ResourceScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 120,
      }}>
      <Text>This is Resource Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function DetailsScreen({route, navigation}: DetailsScreenProps) {
  const {userId, otherParam} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 100,
        paddingVertical: 150,
      }}>
      <Text>Individual Details Screen</Text>
      <Text>UserID: {userId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go To Other Individual Profile"
        onPress={() =>
          navigation.push('IndividualDetails', {
            userId: userId + 1,
            otherParam: 'Anything Bla... Bla',
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="IndividualDetails"
          component={DetailsScreen}
          options={{title: 'Individual'}}
        />
        <Stack.Screen
          name="Home"
          options={{title: 'Home'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Teacher"
          options={{title: 'Teachers'}}
          component={TeacherScreen}
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
      </Stack.Navigator> */}
      <Provider store={store}>
        <HomeScreenNew />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
