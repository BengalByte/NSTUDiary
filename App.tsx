import { NavigationContainer, NavigationProp, NavigatorScreenParams, ParamListBase, StackNavigationState } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number , otherParam:string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function HomeScreen({ navigation }:HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={()=>navigation.navigate("Details",{
        itemId: 86,
        otherParam: "Anything you want",}
        )}/>
    </View>
  );
}


function DetailsScreen({route, navigation}:DetailsScreenProps) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title='Go to Back'
        onPress={()=>navigation.goBack()}/>
      <Button
        title='Push'
        onPress={()=>navigation.push("Details",{
          itemId: itemId+1,
          otherParam: "Anything you want",})}/>
      <Button
        title='Go to Top'
        onPress={()=>navigation.popToTop()}/>
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Individual' }}
        />
        <Stack.Screen
          name="Home"
          options={{ title: 'Overview' }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;