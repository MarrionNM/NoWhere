import * as React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicicons from 'react-native-vector-icons/Ionicons'

//Screns
import HomeScreen from '../screens/Home';
import MapScreen from '../screens/Map';
import ExploreScreen from '../screens/Explore';

//Screen names
const homeName = 'Home';
const exploreName = 'Explore';
const mapName = 'Map';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function mainNavigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName} //Set starting component page
                screenOptions={({route}) => ({
                
                    tabBarIcon: ({focused, color, size}) => 
                    {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }else if (rn === exploreName){
                            iconName = focused ? 'list' : 'list-outline';
                        }else if (rn === mapName){
                            iconName = focused ? 'map' : 'map-outline';
                        }
                        return <Ionicicons name={iconName} size={size} color={color}/>
                    },

                    
                    })}
                    tabBarOptions={{
                        activeTintColor: 'green', inaciveTintColor: 'grey',
                        labelStyle: { paddingBottom: 0, fontSize:14 }, style: {padding: 10, height: 80}
                    }}
                >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={exploreName} component={ExploreScreen}/>
                <Tab.Screen name={mapName} component={MapScreen}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default mainNavigation;    
