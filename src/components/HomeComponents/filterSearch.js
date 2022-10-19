import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import Colors from '../../constants/colors'

const FilterSearch = ({filtertext}) => {
  const areas = ["All", "Tropical", "Beachs", "Hotels", "Vinyards"]
  const [selectatedSearchIndex, setSelectatedSearchIndex] = React.useState(0);
  return ( 
    <View style={{ height: 25, marginBottom:22, flexDirection:"row" }}>
      {
        areas.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={1} onPress={() => setSelectatedSearchIndex(index)}>
            <View style={{marginRight:10, padding:10}}>
              <Text style={{fontSize:17, height:20, fontWeight:"bold", color:selectatedSearchIndex == index ? Colors.primary:"grey"}}>{item}</Text>
            </View>
            {selectatedSearchIndex == index && (
              <View style={{height:3, width:30, backgroundColor:Colors.primary, marginTop:2}}/>
            )}
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default FilterSearch;
