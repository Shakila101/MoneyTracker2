import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainScreen from '../Screens/MainScreen';
import Setting from '../Screens/Setting';
import About from '../Screens/About';

const Stack = createStackNavigator();



export default function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component = {MainScreen} />
      <Stack.Screen name='Setting' component = {Setting} />
      <Stack.Screen name='About' component = {About} />
    </Stack.Navigator>
    </NavigationContainer>


  );
}