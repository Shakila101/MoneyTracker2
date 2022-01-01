import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImageBackground, StyleSheet, Text, SafeAreaView, View, } from "react-native";
import React from 'react';
import BottonTabNavigator from './TabNav';
import Setting from '../Screens/Setting';
import Entrance from '../App'
import DrawerContent from '../Screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
      <Drawer.Navigator 
      
      drawerContent={props => <DrawerContent{...props} />}

      screenOptions={{drawerStyle: {
        backgroundColor: '#090909',
      },
      headerStyle: { backgroundColor: 'black', },
      drawerLabelStyle: {
        color: '#ffe4c4'
      },
      headerTintColor: '#ffe4c4',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }    
  }

      
      >
      

        <Drawer.Screen  name='Money Tracker' component = {BottonTabNavigator}/>
        <Drawer.Screen  name='Profile' component = {Setting} />
        <Drawer.Screen name='Logout' component = {Entrance} />
      </Drawer.Navigator> 

  );
}

const styles = StyleSheet.create({
  backgroundtop: {
  width: 120,
  height: 120,
  position: 'absolute',
  top: 50,
  alignSelf: 'center'
  },
});