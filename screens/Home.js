import { FlatList, SectionList, StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { useState } from 'react';
import { PlaceData } from '../global/constants/dummy'

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
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtracto={(item) => item.id}
        shadowsVerticalScrollIndicator={false}
        // ListHeaderComponent
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
