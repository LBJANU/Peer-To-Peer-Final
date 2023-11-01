// import { StyleSheet, Text, View, FlatList, Animated, Platform, Linking } from 'react-native'
// import React, {useState, useRef} from 'react'

// import OnboardingItem from './OnboardingItem'
// import slides from './slides'

// export default function LastScreen() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const slidesRef = useRef(null);

//   const viewableItemsChanged = useRef(({ viewableItems}) => {setCurrentIndex(viewableItems[0].index);}).current; 

//   const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  
//   const openEmail = () => {
//     Linking.openURL("mailto: andrewshen@gmail.com")
//   }
//   return (
//     <View style = {styles.container}>
//       <View style = {{flex:3}}>
//       <FlatList data = {slides.filter(2)}
//        renderItem={({ item }) => <OnboardingItem item={item} />}
//        horizontal
//        showsHorizontalScrollIndicator
//        pagingEnabled 
//        bounces = {false}
//        keyExtractor={(item) => item.id}
//        onScroll = {Animated.event([{ nativeEvent: { contentOffset: {x: scrollX} }}], {useNativeDriver: false,})}
//        scrollEventThrottle={32}
//        onViewableItemsChanged={viewableItemsChanged}
//        viewabilityConfig={viewConfig}
//        ref={slidesRef}
//        />
//        </View>
//        <TouchableOpacity onPress={() => openEmail()} style = {{borderRadius: 20}}>
//         <Text style = {styles.contact}>Contact</Text>
//         </TouchableOpacity>
    
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   contact: {
//     backgroundColor: '#3A59FF',
//     color: 'white',
//     width: "75%",
//     borderRadius: 25,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginLeft: '11%',
//     padding: "2%",
//     fontSize:  27,
//     marginTop: '8%'
//   }




// })