import { ImageBackground, StyleSheet, Text, ScrollView, View, Button, StatusBar, FlatList, Image } from 'react-native';

import HeaderComponent from '../components/DetailComponents/header';
import AttractionsComponent from '../components/DetailComponents/attractions';
import InfoComponent from '../components/DetailComponents/info';

export default function DetailScreen({navigation, route}) {
  const item = route.params;
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <HeaderComponent navigation={navigation} route={item}/>
      <AttractionsComponent route={item}/>
      <InfoComponent route={item}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
