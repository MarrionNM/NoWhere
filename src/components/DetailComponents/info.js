import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../constants/colors';

export default function info({route}) {
  const item = route;
  return (
    <View style={{marginHorizontal:10, padding:10, backgroundColor:Colors.foreground}}>
      <Text>{item.Description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  moreCard:{
    backgroundColor: Colors.foreground,
    margin: 10,
    height: 75,
    width: "25%",    
  }
});
