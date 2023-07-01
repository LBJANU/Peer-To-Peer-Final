import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

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
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View style={{ margin: 8 }}>
      <View style={{ width: '100%', alignItems: 'baseline' }}>
        <Text style={{ fontSize: 30, paddingBottom: 10, fontWeight: 'bold' }}>Choose Your Subjects:</Text>
      </View>
      <View style={{ height: 0 }} />

      <SelectBox
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

