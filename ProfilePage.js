import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import ProfileInputs from './ProfileInputs';

export default function ProfilePage()
 {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  return (
    <ImageBackground
    source = {require('./assets/background2.png')}
    style = {styles.background}
    resizeMode= "cover">

    <View style={styles.container}>
      <Image
        source={require('./assets/circle.gif')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Software Developer</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        semper neque. Suspendisse potenti. Fusce nec vestibulum ex.
      </Text>

      <ProfileInputs placeholder= "Name" value = {name} setValue={setName}/> 
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
  },
  background: {
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
  },
});


