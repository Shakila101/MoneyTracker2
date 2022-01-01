import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ImageBackground} from 'react-native';
import PressableOpacity from './components/PressableOpacity';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './routes/Drawer';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Signup2 from './Screens/Signup2';

function Entrance({ navigation }) {
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
    
    <PressableOpacity onPress={() => navigation.navigate('Signup2')} style={{paddingBottom: 15}} >
    <Text style={styles.Title2}> ~ Sign Up </Text>
    </PressableOpacity>

    <PressableOpacity onPress={() => navigation.navigate('Login')} style={{paddingBottom: 5}}>
    <Text style={styles.Title3}> ~ Login </Text>
    </PressableOpacity>
    </View>
    </SafeAreaView>
    );
}


const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Entrance" screenOptions={{headerShown: false}}>
    <Stack.Screen name= 'Entrance' component={Entrance} />
    <Stack.Screen name= 'DrawerNav' component={DrawerNav} />
    <Stack.Screen name= 'Signup2' component={Signup2} />
    <Stack.Screen name= 'Login' component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


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
    top: 200,
  },
  Title3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: 220,
  },
  backgroundtop: {
    width: 320,
    height: 320,
    position: 'absolute',
    top: -250,
    alignSelf: 'center'
  
  },
})
