import { ImageBackground, StyleSheet, Text, ScrollView, View, Button, StatusBar, FlatList, Image } from 'react-native';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailScreen({navigation, route}) {
  const item = route.params;
  console.log(item);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" translucent backgroundColor="rgba(0,0,0,0)"/> 
      <ImageBackground style={styles.headerImage} source={item.image}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} color={Colors.white} onPress={navigation.goBack}/>
          <Icon name="bookmark-border" size={28} color={Colors.white}/>
        </View>

        <View>
          <Text style={{fontSize:42, textAlign:"center", width:"100%", color:Colors.iconLight}}>{item.name}</Text>
          <View style={{ left:"46%", flexDirection:"row", top:80, color:"white"}}>
            <Icon name="person-outline" size={26} color={Colors.iconLight}/> 
            <Text style={{color:Colors.iconLight}}>{item.Population}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.more}>
        <Text style={{textAlign:"right", color:"skyblue", fontSize:14, margin:4}}>View more</Text>
        <View style={{ height: 250, marginBottom:22 }}>
          <FlatList data={item.attractions}
            renderItem={({item}) =>
              <View style={{backgroundColor:Colors.foreground, margin:5, width:75}}>
                <Image source={item.images} resizeMode="cover"/>
                <Text>{item.name}</Text>
                <Text> - </Text>
                {/* <Text>{item.Description}</Text> */}
              </View> }
            keyExtractor={(item) => item.id} shadowsVerticalScrollIndicator={false} shadowsHorizntallScrollIndicator={false}
            style={{width: "100%", padding: 10}}
          />
        </View>
      </View>

      <View style={{marginHorizontal:10, padding:10, backgroundColor:Colors.foreground}}>
        <Text>{item.Description}</Text>
      </View>
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

  headerImage:{
    height: 400,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },

  header:{
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },

  more:{
    margin:10,
  },

  moreCard:{
    backgroundColor: Colors.foreground,
    margin: 10,
    height: 75,
    width: "25%",    
  }


});
