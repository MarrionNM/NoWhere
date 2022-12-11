import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const root = "https://pixabay.com/api/?key=";
const api = "30741071-e6f88c2a86f6688b73d1c3106&q=";
var query = "";
const resultType = "&image_type=photo";
// https://pixabay.com/api/?key=30741071-e6f88c2a86f6688b73d1c3106&q=yellow+flowers&image_type=photo

var picData;

const getPlaces = async () => {
  try {
    const response = await fetch(root + api + query + resultType.json);
    const json = await response.json();
    picData = json["hits"];
    return picData;
  } catch (error) {
    console.error(error);
  } finally {
  }
}
/////////

export default function ExploreScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(root + api + query + resultType.json)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Pictures:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            numColumns={2}
            renderItem={({ item }) => (
              <Image source={{uri: item.largeImageURL}} style={{width: "100%", height: 150, margin:10}}/>
            )}
          />
        </View>
      )}
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
