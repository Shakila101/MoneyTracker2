import 'react-native-gesture-handler';
import React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, View } from "react-native";
import PressableOpacity from '../components/PressableOpacity';
import { StatusBar } from 'expo-status-bar';


function MainScreen() {

    return (
      
      <View style={styles.container}>
      <ImageBackground source={require('../assets/MONEY_ICON.png')} style={styles.backgroundtop} />
      <StatusBar backgroundColor='default'/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    backgroundtop: {
    width: 220,
    height: 220,
    position: 'absolute',
    top: 50,
    alignSelf: 'center'
    },
  });


export default MainScreen;