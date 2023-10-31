import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { xorBy } from 'lodash'
import Checkbox from 'expo-checkbox';

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Math',
    id: 'MAT',
  },
  {
    item: 'English',
    id: 'ENG',
  },
  {
    item: 'Science',
    id: 'SCI',
  },
  {
    item: 'History',
    id: 'HIS',
  },
  {
    item: 'Computer Programming',
    id: 'COM',
  },
//   {
//     item: '',
//     id: 'MUN',
//   },
//   {
//     item: 'Manchester City FC',
//     id: 'MCI',
//   },
//   {
//     item: 'Everton FC',
//     id: 'EVE',
//   },
//   {
//     item: 'Tottenham Hotspur FC',
//     id: 'TOT',
//   },
//   {
//     item: 'Chelsea FC',
//     id: 'CHE',
//   },
//   {
//     item: 'Liverpool FC',
//     id: 'LIV',
//   },
//   {
//     item: 'Arsenal FC',
//     id: 'ARS',
//   },

//   {
//     item: 'Leicester City FC',
//     id: 'LEI',
//   },
]

export default function ProfileDropDownVals() {
  const [selectedbox, setSelectedBox] = useState('');
  const [selectedbox2, setSelectedBox2] = useState('');
  const [selectedbox3, setSelectedBox3] = useState('');
  const [selectedbox4, setSelectedBox4] = useState('');
  const [selectedbox5, setSelectedBox5] = useState('');
  const [selectedbox6, setSelectedBox6] = useState('');


  
  return (
    <View style={{ margin: 8 }}>
      <View style={{ width: '100%', alignItems: 'baseline' }}>
        <Text style={{ fontSize: 24, paddingBottom: 10, fontWeight: 'bold' }}>Choose Your Subjects:</Text>
      </View>
      <View style={{ height: 0 }} />


    <View style = {styles.row}>
      <Checkbox
       value={selectedbox}
       onValueChange={setSelectedBox}
       style={styles.checkbox}
     />

    <Text style={styles.description}> Biology </Text>

  </View>

  <View style = {styles.row}>

  <Checkbox
       value={selectedbox2}
       onValueChange={setSelectedBox2}
       style={styles.checkbox}
     />

    <Text style={styles.description}> Computer Programming </Text>

  </View>

  <View style = {styles.row}>

  <Checkbox
       value={selectedbox3}
       onValueChange={setSelectedBox3}
       style={styles.checkbox}
     />

    <Text style={styles.description}> Chemistry </Text>

  </View>

  <View style = {styles.row}>

  <Checkbox
       value={selectedbox4}
       onValueChange={setSelectedBox4}
       style={styles.checkbox}
     />

    <Text style={styles.description}> Math </Text>

  </View>

  <View style = {styles.row}>

<Checkbox
     value={selectedbox5}
     onValueChange={setSelectedBox5}
     style={styles.checkbox}
   />

  <Text style={styles.description}> English </Text>

</View>

<View style = {styles.row}>

<Checkbox
     value={selectedbox6}
     onValueChange={setSelectedBox6}
     style={styles.checkbox}
   />

  <Text style={styles.description}> History </Text>

</View>



    </View>
  
  )

  // function onMultiChange() {
  //   return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  // }

  // function onChange() {
  //   return (val) => setSelectedTeam(val)
  // }
}

const styles = StyleSheet.create({
  checkbox: {
    margin: '0%',
    textAlign: 'center',
    padding: 10,
    marginBottom: '6%'
  },
  
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 16,
  },

  row: {
    flexDirection: 'row'
  }






});

