import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


function About(props) {
  return (
      
    <View style={styles.container}>
    <ImageBackground source={require('../assets/MONEY_ICON.png')} style={styles.background1} />
    <StatusBar backgroundColor='default'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background1: {
  width: 220,
  height: 220,
  position: 'absolute',
  top: 50,
  alignSelf: 'center'
  },
});


export default About;