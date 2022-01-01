import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View , TextInput,
  SafeAreaView, ImageBackground, StatusBar, state} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



class Signup2 extends React.Component{


state= {
    username: ""
}


constructor(props) {
    super(props);
    this.getData();
}

onSubmit = async () => {
    try{    
    await AsyncStorage.setItem('username', this.state.username)
    } catch (err) {
        console.log(err)
    }
}
getData = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      if(username !== null) {
          this.setState({username: username})
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }


render(){
  return (
    <SafeAreaView style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingTop: StatusBar.currentHeight
    }}>


    <TextInput style={styles.Textborder} placeholder="First Name"
    value={this.state.username}
    onChangeText={val => this.setState({ username: val })}/>

<Text style={styles.Button2} onPress={this.onSubmit}>~    SignUp    ~</Text>
<Text style={styles.Button2} onPress={() => navigation.navigate('Entrance')}>~    go back    ~</Text>

    </SafeAreaView>
    );
}
}

export default Signup2;

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
