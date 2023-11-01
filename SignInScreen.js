import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {auth} from './firebase';


export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password2)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Registered with:", user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogIn = () => {
    auth.createUserWithEmailAndPassword(email, password2)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Logged in with:", user.email);
    })
    .catch(error => alert(error.message))
  }

  const onSignUpPress = () => {
    //console.warn("Sign In");
  }
  
  const onSignUpNavigation = () => {
    navigation.navigate("Create Your Profile");
  }
  return (
    
    <ImageBackground
    source = {require('./assets/background2.png')}
    style = {styles.background}
    resizeMode= "cover">

      <Image
        source = {require('./assets/peertopeer.png')}
        style = {styles.logo}>

       </Image>

    <View style = {styles.root}>

     <CustomInput placeholder= "Username" value = {email} setValue={setEmail}/> 
     <CustomInput placeholder= "Password" value = {password2} setValue={setPassword2} secureTextEntry={true}/> 

     <CustomButton text = "Sign In" onPress={() => {onSignUpNavigation(); handleLogIn(); }} />
   
     </View>

    </ImageBackground>

    
    
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo:
  {
    justifyContent: 'center',
    alignContent: 'center',
    width: "100%",
    height: 240,
    marginTop: '0%'
  },





})