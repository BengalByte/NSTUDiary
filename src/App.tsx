import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from 'store/store';
import AppNavigator from 'navigation/AppNavigator';

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
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
