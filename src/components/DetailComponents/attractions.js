import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native';
import Colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({item}) => {
  return(
      <View style={styles.card}>
          <Image source={{uri: item.images}} style={{width: "100%", height: "70%"}}/>
          <View style={styles.body}>
              <Text style={styles.name}>{item.place}</Text>
              <View style={{marginTop: 0,
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Visit</Text>
                </Pressable>
                <Icon name="heart-outline" size={28} color={Colors.primary}/>
              </View>
          </View>
      </View>
  )
}

function attractions({route}) {
  const item = route;
  return (
    <View style={{margin:10}}>
      <Text style={styles.viewMore}>View more</Text>

      <FlatList data={item.attractions}
        renderItem={({item}) => <Card item={item}/> }
        keyExtractor={(item) => item.id} shadowsVerticalScrollIndicator={false} shadowsHorizntallScrollIndicator={false}
        style={{width: "100%", padding: 10}} horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewMore:{ 
    textAlign: "right",
    color: "#1784FE",
    fontSize: 14,
    marginRight: 4,
    marginBottom: 0
  },

  card:{ 
    height: 230, width: 280,
    marginTop: 0,
    marginRight: 10,
    backgroundColor: Colors.foreground
  },
  body:{
    padding: 5,
    height:"30%"
  },
  name:{
    fontSize:18,
    padding:4
  },
  button: {
    paddingLeft:20,
    width:"100%",
    height:"40%"
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 30,
    margin:4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.primary,
    width:"32%",
    height:"60%"
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default attractions;
