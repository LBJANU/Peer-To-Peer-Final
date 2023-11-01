import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import ProfileInputs from './ProfileInputs';
import ProfileDropDownVals from './ProfileDropDownVals';

export default function ProfilePage({navigation})
 {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [isSelected, setSelection] = useState('');
  const [isSelected2, setSelection2] = useState('');
  return (
    <ScrollView>
    <ImageBackground
     source = {require('./assets/white.jpg')}
    style = {styles.background}
    resizeMode= "cover">

    <View style={styles.container}>
      <Image
        source={require('./assets/circle.gif')}
        style={styles.profileImage}
      />


    
      <Text style={styles.name}>Name:</Text>
      <ProfileInputs placeholder= "Name" value = {name} setValue={setName}/> 
      
      <Text style={styles.grade}>Grade:</Text>
      <ProfileInputs placeholder= "Grade" value = {grade} setValue={setGrade}/> 
    
     <View style = {styles.checkboxtext}>
   
      <Checkbox
       value={isSelected}
       onValueChange={setSelection}
       style={styles.checkbox}
     />
   
   
      <Text style={styles.description}> Mentee </Text>
      </View>

      <View style = {styles.checkbox2}>
   
      <Checkbox
       value={isSelected2}
       onValueChange={setSelection2}
       style={styles.checkbox}
     />
   
   
      <Text style={styles.description}> Mentor </Text>
      </View>
  
        
      <ProfileDropDownVals/>
     
      <TouchableOpacity onPress= {() => navigation.navigate("Onboarding")} style = {{borderRadius: 20}}>
        <Text style = {styles.save}>Find Peers</Text>

      </TouchableOpacity>
    
      
      </View>

    </ImageBackground>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 18,
  },
  background: {
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    alignSelf: 'center',
    marginTop: 40
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 20
  },
  grade: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  checkboxtext: {
    flexDirection: 'row',
  },
  checkbox2: {
    flexDirection: 'row',
    margin: '0%',
  },
  checkbox: {
    margin: '0%',
    textAlign: 'center',
    padding: 10,
    marginBottom: '6%'
    
  },
  save: {
    backgroundColor: 'white',
    color: '#196472',
    width: "75%",
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '3%'
  }
});


