import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';

export default function HomeScreen ({ navigation }) {
  return (
    <ImageBackground
    source = {require('./assets/background2.png')}
    style = {styles.background}
    resizeMode= "cover">

    <View>
      <Image
        source = {require('./assets/peertopeer.png')}
        style = {styles.logo}>

       </Image>
       <Text style = {styles.text}>Learn More. Teach More. Help More.</Text>
       <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} style = {{borderRadius: 20}}>
        <Text style = {styles.signup}>Sign Up</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} style = {{borderRadius: 20}}>
        <Text style = {styles.login}>Log In</Text>
       </TouchableOpacity>
    </View>
  </ImageBackground>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex: 1
    
  },
  logo:{
    justifyContent: 'center',
    alignContent: 'center',
    width: "100%",
    height: 240,
    marginTop: '8%'
  },
  text:{
    marginTop: '-0%',
    marginLeft: '8.5%',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#196472',
    fontSize: 21,
    fontWeight: 'bold'

  },
  signup: {
    backgroundColor: 'white',
    color: '#196472',
    width: "75%",
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '105%'
  },
  login: {
    backgroundColor: '#196472',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '8%'
  },
 
});