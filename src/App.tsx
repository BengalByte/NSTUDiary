import { NavigationContainer } from '@react-navigation/native';
import { AuthScreenStack, RootDrawer } from 'navigation/NewNavigator';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from 'store/store';
// import AppNavigator from 'navigation/AppNavigator';

// interface User {
//   name: string;
//   profession: string;
//   phone: string;
//   email: string;
//   facebook: string;
// }

function App(): JSX.Element {
  const isAuthenticated = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isAuthenticated ? <RootDrawer /> : <AuthScreenStack />}
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({});

export default App;
