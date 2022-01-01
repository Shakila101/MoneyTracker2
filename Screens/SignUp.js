import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View , TextInput,
  SafeAreaView, ImageBackground, StatusBar, state} from 'react-native';

function Signup({ navigation })   {



  return (

    
    <SafeAreaView style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingTop: StatusBar.currentHeight
    }}>
    <ImageBackground source={require('../assets/MONEY_ICON.png')} style={styles.backgroundtop} />    
    <Text style={styles.Title}>Account Creation</Text>


    <TextInput style={styles.Textborder} placeholder="First Name"
    value={this.state.username}
    onChangeText={val => this.setState({ username: val })}/>


    <TextInput style={styles.Textborder} placeholder="Last Name"/>
    <TextInput style={styles.Textborder} placeholder="Username"/>
    <TextInput style={styles.Textborder} placeholder="Email Address"/>
    <TextInput style={styles.Textborder} placeholder="Password" secureTextEntry={true}/>
    <TextInput style={styles.Textborder} placeholder="Re-enter Password" secureTextEntry={true}/>
      <Text style={styles.Button2} onPress={() => navigation.navigate('Entrance')}>~    SignUp    ~</Text>
    </SafeAreaView>
    );
}

export default Signup;

const styles = StyleSheet.create({
  Title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: -20,
    padding: 20
  },
  Text101 : {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: -200,
  },
  Textborder : {
      backgroundColor: '#ffe4c4',
      width: 300,
      height: 40,
      borderRadius: 30,
      top: -40,
      padding: 10,
      margin: 10
  
  },
  Button2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffe4c4',
    top: -30
  },   
  Form2: {
    top: 500
  },
  backgroundtop: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 100,
    alignSelf: 'center'
  
  },

})
