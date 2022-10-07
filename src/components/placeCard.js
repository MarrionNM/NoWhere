import React from 'react';
import { View, Image } from 'react-native';

const PlaceCard = ({continent}) => {
    return ( 
      <View style={{ height: 250, margin: 10, flex:1, justifyContent:"center", alignItems:"center" }}>
        <Image source={continent.image}
            resizeMode="cover"
            style={{
                width:"100%", height:"100%",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderBottomRightRadius:20,
                borderBottomLeftRadius: 20
        }}/>
          
        <View style={{position:"absolute", justifyContent:"center", alignItems:"center",
          backgroundColor:"black", width:"100%", height:"100%", opacity:0.4,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20}}>
          
          <Text style={{fontSize:32, color:"white"}}>{continent.name}</Text>
        </View>
      </View>
    )
}

export default {PlaceCard};