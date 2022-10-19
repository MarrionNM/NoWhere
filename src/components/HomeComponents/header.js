import { Text, View } from 'react-native';
import Colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return ( 
    <View style={{ height:"15%", width:"100%", flexDirection:"row", paddingLeft:20,  paddingRight:20 }}>
      <View style={{width:"90%"}}>
        <Text style={{ fontSize:24, fontWeight:"80", color:Colors.light }}>Find your next</Text>
        <Text style={{ fontSize:26, fontWeight:"80", color:Colors.light }}>vacation spot</Text> 
        <Text style={{ fontSize:26, fontWeight:"80", color:Colors.light }}>around the <Text style={{ fontSize:26, fontWeight:"bold", color:Colors.primary }}>Globe</Text></Text>                   
      </View>
      <Icon name="person-outline" size={40} color={Colors.dark} style={{ width:"10%", top:25 }}/>
    </View>
  )
}

export default Header;
