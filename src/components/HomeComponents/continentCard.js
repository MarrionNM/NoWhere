import Colors from '../../constants/colors'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ContinentCard = ({navigation, continent}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", continent)}>
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
          
          <Text style={{fontSize:32, color:Colors.light}}>{continent.name}</Text>
          <View style={{ left:"46%", flexDirection:"row", top:80, color:"white"}}>
            <Icon name="person-outline" size={16} color={Colors.iconLight}/> 
            <Text style={{color:Colors.light}}>{continent.Population}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContinentCard;
