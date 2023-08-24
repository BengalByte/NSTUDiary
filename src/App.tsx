import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from 'store/store';
import 'react-native-gesture-handler';
import {RootDrawer} from 'navigation/NewNavigator';
import HomeScreen from 'screens/Test/HomeScreen';
// import AppNavigator from 'navigation/AppNavigator';

interface User {
  name: string;
  profession: string;
  phone: string;
  email: string;
  facebook: string;
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View>
        <RootDrawer />
        {/* <HomeScreen /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
