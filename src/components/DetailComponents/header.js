import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation, route}) => {
  const item = route;

  return (
    <ImageBackground style={styles.headerImage} source={item.image}>
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} color={Colors.white} onPress={navigation.goBack}/>
          <Icon name="bookmark-border" size={28} color={Colors.white}/>
        </View>

        <View style={{position:"absolute", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
          <Text style={{fontSize:42, color:Colors.iconLight}}>{item.name}</Text>
          <View style={{ left:"46%", flexDirection:"row", top:100, color:"white"}}>
            <Icon name="person-outline" size={22} color={Colors.iconLight}/> 
            <Text style={{color:Colors.iconLight}}>{item.Population}</Text>
          </View>
        </View>

      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  headerImage:{
    height: 300,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },

  header:{
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
});

export default Header;
