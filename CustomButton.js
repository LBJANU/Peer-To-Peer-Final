import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

export default function CustomButton({onPress, text}) {
  return (
    <Pressable onPress = {onPress} style = {styles.container}>
      <Text style = {styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',

        width: '100%',

        padding: 15,
        marginVertical: 20,

        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        color: 'white'

    }

})