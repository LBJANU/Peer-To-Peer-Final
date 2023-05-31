import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');

  const clickPressed = () => {
    setName('ong shit wild fr');
  }


  return (
    <View style={styles.container}>
      <View style ={styles.header}>
      <Text style ={styles.bolden}>My name is {name}</Text>
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
  }
});
