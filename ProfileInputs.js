import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'; 


export default function ProfileInputs({value, setValue, placeholder}) {
  return (
    <View style = {styles.container}>
      <TextInput 
      value = {value}
      onChangeText={setValue}
      placeholder= {placeholder}
      style = {styles.input}
     />
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    width: '100%',
    marginTop: '4%',
    marginBottom: '8%',
   
    borderColor: '#e8e8e8',
    borderWidth: 4,
    borderRadius: 25,

    paddingHorizontal: 10,
    paddingVertical: 4,
    
  },
  input: {
    margin: '3%',
    borderRadius: 5
  }

})
