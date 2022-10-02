import { FlatList, SectionList, StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { useState } from 'react';
import { PlaceData } from '../global/constants/dummy'
import { PlaceCard } from '../components/placeCard'
///////////

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <FlatList
        data={PlaceData}
        renderItem={({item}) =>  <PlaceCard data={item}/>}

        keyExtracto={(item) => item.id}
        shadowsVerticalScrollIndicator={false}
        style={{width: "100%", padding: 20}}
        />

      <Text>Home Screen</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
