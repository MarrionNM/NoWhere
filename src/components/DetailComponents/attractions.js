import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({item}) => {
    return(
        <View style={styles.card}>
            <Text>{item.name}</Text>
            <Image source={{uri: item.images}}
                style={{width: "100%", height: "90%"}}/>
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
        color: "skyblue",
        fontSize: 14,
        margin: 4
    },

    card:{ 
        height: 180, width: 280,
        marginRight: 10, padding: 4,
        backgroundColor: Colors.foreground
    }
});

export default attractions;
