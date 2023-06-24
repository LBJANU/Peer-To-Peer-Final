import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

export default function SignUpScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpPress = () => {
    console.warn("Sign In");
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
        source = {require('./assets/logo3.jpeg')}
        style = {styles.logo}>

       </Image>

    <View style = {styles.root}>

     <CustomInput placeholder= "Username" value = {username} setValue={setUsername}/> 
     <CustomInput placeholder= "Password" value = {password} setValue={setPassword} secureTextEntry={true}/> 

     <CustomButton text = "Sign in" onPress={() => {onSignUpPress(); onSignUpNavigation(); }} />
   
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