import { FlatList, SectionList, StyleSheet, Text, View,TextInput, Button, Image, TouchableHighlight, Touchable } from 'react-native';
import { useState } from 'react';
import PeopleData from '../global/constants/test';

import { PlaceData } from '../global/constants/dummy';



//export default function
const HomeScreen = () => {
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
      <Text>Home Screen</Text>

      <View>

        <FlatList
          data={PlaceData}
          renderItem={ ({item}) =>

          <View style={{ height: 250, margin: 10, marginBottom: 20 }}>

              <Image source={item.image}
                  resizeMode="cover"
                  style={{
                      width:"100%", height:"100%",
                      borderTopLeftRadius: 14,
                      borderTopRightRadius: 14,
              }}/>

              <View>
                  <Text>{item.name}</Text>
              </View>

              {/* <CircleButton imgUrl="" right={10} top={10}/> */}

              {/* <SubInfo /> */}


          </View>

          }
          
          keyExtractor={(item) => item.id}
          shadowsVerticalScrollIndicator={false}
          style={{width: "100%", padding: 10}}
          />
      </View>

      <Button title="Go to Details" onPress={() => alert("Hello there!")}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 2,
    paddingRight: 2
  },
});


export default HomeScreen;