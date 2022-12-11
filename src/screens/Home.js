import { FlatList, StyleSheet, View } from 'react-native';
import { React } from 'react';
import { PlaceData } from '../api/dummy';

import HeaderComponent from '../components/HomeComponents/header';
import FilterComponent from '../components/HomeComponents/filterSearch';
import ContinentComponent from '../components/HomeComponents/continentCard';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  // const plcData = useState(PlaceData);

  // const handleSearch = (value) => {
  //   if (value.length ===0) {
  //     alert({value});
  //   }
  // }

  // const filterdata = PlaceData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

  // if (filterdata.length === 0) {
  //   alert(filterdata);
  // }
  // else{
  //   alert("Ahh");
  // }
  // renderPlaces = ({item}) => {
  //   return {
  //     // <TouchableHighlight>
  //       <View>
  //         <Text>{item.name}</Text>
  //       </View>
  //     // </TouchableHighlight>
  //     }
  // }
  return (
    <View style={styles.container}>

      <HeaderComponent/>
      <FilterComponent/>

      <FlatList data={PlaceData}
        renderItem={({item}) => <ContinentComponent navigation={navigation} continent={item}/> }
        keyExtractor={(item) => item.id} shadowsVerticalScrollIndicator={false} shadowsHorizntallScrollIndicator={false}
        style={{width: "100%", padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    paddingTop: 10, marginBottom: 2, paddingLeft: 2, paddingRight: 2
  },
});

export default HomeScreen;
