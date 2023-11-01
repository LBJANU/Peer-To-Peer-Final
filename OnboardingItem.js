import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions, TouchableOpacity, Platform, Linking} from 'react-native'
import React from 'react'


export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
   const openEmail = () => {
    Linking.openURL("mailto: andrewshen@gmail.com");
   }
    return (
    <View style = {[styles.container, {width}]}>
        <Image source = {item.image} style = {[styles.image, {width, resizeMode: "contain" }]}/>

        <View style = {{flex: 0.3}}>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => openEmail()} style = {{borderRadius: 20}}>
        <Text style = {styles.name}>Choose Peer</Text>
       </TouchableOpacity>


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: 
    {
        flex: 0.7,
        justifyContent: 'center'
    },
    title:
    {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
    name: {
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
    }


})