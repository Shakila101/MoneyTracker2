import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import MainScreen from '../Screens/MainScreen';
import Setting from '../Screens/Setting';
import About from '../Screens/About';



const Tab = createMaterialBottomTabNavigator();

export default function BottonTabNavigator() {
  return (
    <Tab.Navigator  
    activeColor="#ffe4c4"
  inactiveColor="#3e2465"
  barStyle={{ backgroundColor: 'black' }}
    screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component = {MainScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name='Setting' component = {Setting} 
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="assistant" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name='About' component = {About} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-cowboy-hat" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>


  );
}