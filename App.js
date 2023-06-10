import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  const [name, setName] = useState('Shaun');
  const {change, setChange} = useState('default');
  const {changeage, setChangeAge} = useState('0');
  const [age, setAge] = useState('30');

  const clickPressed = () => {
    setName('change');
    setAge('changeage');
  }


  return (
    <View style={styles.container}>
      <View style ={styles.header}>
      
        <Text style = {styles.bolden}> Enter Name:</Text>
        <TextInput style = {styles.input}
         placeholder='Example: Anish Jain' 
         onChangeText={(change) => setChange(change)} />

        <Text style = {styles.bolden}> Enter Age:</Text>
        <TextInput style = {styles.input}
         placeholder='Example: 23' 
         onChangeText={(changeage) => setChangeAge(changeage)} />


      <Text style ={styles.bolden}>My name is {name} and my age is {age} </Text>
      </View>
      <View style = {styles.buttonContainer}>
        <Text></Text>
        <Button title = 'update state' onPress={clickPressed} />
      </View>

    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,

  },
  bolden: {
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
