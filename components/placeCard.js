import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

const PlaceCard = ({data}) => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: "#0000",  borderRadius: 14, marginBottom: 4 }}>

            <View style={{ width:"100%", height: 250 }}>

                <Image source={data.image}
                    resizeMode="cover"
                    style={{
                        width:"100%", height:"100%",
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                    }}/>

                {/* <CircleButton imgUrl="" right={10} top={10}/> */}

                {/* <SubInfo /> */}

                <View>

                </View>

            </View>

        </View>
    );
}

export default {PlaceCard};