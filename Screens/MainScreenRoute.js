import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ImageBackground} from 'react-native';
import PressableOpacity from './components/PressableOpacity';

function MainScreenRoute() {
  return (
    
    <SafeAreaView style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    }}>
    <View>
    <ImageBackground source={require('./assets/MONEY_ICON.png')} style={styles.backgroundtop} />    
    <Text style={styles.Title}>MONEY - HANDLER</Text>
    <PressableOpacity onPress={TryThis}>
    <Text style={styles.Title2}> ~ Press to Enter </Text>
    </PressableOpacity>
    </View>
    </SafeAreaView>
    );
}


export default MainScreenRoute;





const styles = StyleSheet.create({
  Title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: 100
  },
  Title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: 200
  },
  backgroundtop: {
    width: 320,
    height: 320,
    position: 'absolute',
    top: -250,
    alignSelf: 'center'
  
  },
})
