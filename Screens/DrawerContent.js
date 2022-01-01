import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';


function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View StyleSheet={styles.userInfoSection}>
                    <Avatar.Image source={require('../assets/ProfilePic1.png')} size={140} 
                    style={{alignSelf:"center", shadowColor: '#ffe4c4',
                            
                            shadowOpacity: 0.8,
                            shadowRadius: 35}} />
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                <Drawer.Item
                icon={() => (
                    <Icon
                    name="home"
                    color="#ffe4c4"
                    size={20}                    />
                )}
                label={<Text style={{color: '#ffe4c4'}}>Home</Text>}
                onPress={() => {props.navigation.navigate('Home')}}
                />
                <Drawer.Item
                icon={() => (
                    <Icon
                    name="assistant"
                    color="#ffe4c4"
                    size={20}                    />
                )}
                label={<Text style={{color: '#ffe4c4'}}>Setting</Text>}
                onPress={() => {props.navigation.navigate('Setting')}}
                />
                <Drawer.Item
                icon={() => (
                    <Icon
                    name="account-cowboy-hat"
                    color="#ffe4c4"
                    size={20}                    />
                )}
                label={<Text style={{color: '#ffe4c4'}}>Profile</Text>}
                onPress={() => {props.navigation.navigate('About')}}
                />
            </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item
                icon={() => (
                    <Icon
                    name="exit-to-app"
                    color="#ffe4c4"
                    size='20'                    />
                )}
                label={<Text style={{color: '#ffe4c4'}}>Logout</Text>}
                onPress={() => {props.navigation.navigate('Entrance')}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
export default DrawerContent;