import { FlatList, StyleSheet, Text, View,TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { PlaceData } from '../api/dummy';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';


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

  const ContinentCard = ({continent}) => {
    return ( 
      <View style={{ height: 250, margin: 10, flex:1, justifyContent:"center", alignItems:"center" }}>
        <Image source={continent.image}
            resizeMode="cover"
            style={{ width:"100%", height:"100%",
                borderTopLeftRadius: 30, borderTopRightRadius: 30,
                borderBottomRightRadius:20, borderBottomLeftRadius: 20,

                shadowOpacity: .3, shadowRadius: 20,
                shadowOffset: {
                  width: 0,
                  height: 10
                }
        }}/>
        
        <View style={{position:"absolute", justifyContent:"center", alignItems:"center",
          backgroundColor:"black", width:"100%", height:"100%", opacity:0.4,
          borderTopLeftRadius: 30, borderTopRightRadius: 30,
          borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
          
          <Text style={{fontSize:32, color:"white"}}>{continent.name}</Text>
          <View style={{ left:"46%", flexDirection:"row", top:80, color:"white"}}>
            <Icon name="person-outline" size={16} color="white"/> 
            <Text style={{color:"white"}}>{continent.Population}</Text>
          </View>
        </View>
      </View>
    )
  }

  const areas = ["All", "Tropical", "Beachs", "Hotels", "Vinyards"]
  const [selectatedSearchIndex, setselectatedSearchIndex] = React.useState(0);
  const FilterSearch = ({filtertext}) => {
    return ( 
      <View style={{ height: 25, padding:20, flexDirection:"row" }}>
        {areas.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={1}>
            <View>
              <Text style={{fontSize:17, height:20, fontWeight:"bold", color:selectatedSearchIndex == index ? "#1e96e1":"grey"}}>gffgh</Text>
            </View>
            {selectatedSearchIndex == index && (
              <View style={{height:3, width:30, backgroundColor:"#1e96e1", marginTop:2}}/>
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  }


  return (
    <View style={styles.container}>
      {/* <ScrollView> */}

        <View style={{ height:"15%", width:"100%", flexDirection:"row", paddingLeft:20,  paddingRight:20 }}>
          <View style={{width:"90%"}}>
            <Text style={{ fontSize:24, fontWeight:"80", color:"#061c2a" }}>Find your next</Text>
            <Text style={{ fontSize:26, fontWeight:"80", color:"#061c2a" }}>vacation spot</Text> 
            <Text style={{ fontSize:26, fontWeight:"80", color:"#061c2a" }}>around the <Text style={{ fontSize:26, fontWeight:"bold", color:"#1e96e1" }}>Globe</Text></Text>                   
          </View>
          <Icon name="person-outline" size={40} color="grey" style={{ width:"10%", top:25 }}/>
        </View>
        
        <FilterSearch />
        
        <FlatList
          data={PlaceData}
          renderItem={({item}) =>
          <View>
              <ContinentCard continent={item}/>
            </View>
          }
          keyExtractor={(item) => item.id} shadowsVerticalScrollIndicator={false} shadowsHorizntallScrollIndicator={false}
          style={{width: "100%", padding: 10}}
        />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    paddingTop: 10, paddingBottom: 15, paddingLeft: 2, paddingRight: 2
  },
});

export default HomeScreen;
