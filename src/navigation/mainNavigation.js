import * as React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeStackScreen from '../navigation/homeNavigation';
import MapScreen from '../screens/Map';
import ExploreScreen from '../screens/Explore';

//Screen names
const homeName = 'Home';
const exploreName = 'Explore';
const mapName = 'Map';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function mainNavigation(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor='blue' barStyle='light-content' />

            <Tab.Navigator
                initialRouteName={homeName} //Set starting component page
                screenOptions={({route}) => ({
                    headerShown:false,
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
                    tabBarActiveTintColor: "green",
                    tabBarLabelStyle: {
                      paddingBottom: 0,
                      fontSize: 14
                    },
                    tabBarStyle: [
                      {
                        display: "flex"
                      },
                    ]
                    
                    })}
                    tabBarOptions={{
                        inaciveTintColor: 'grey',
                        labelStyle: { paddingBottom: 0, fontSize:14 }, style: {padding: 10, height: 80},
                    }}
                >
            
                <Tab.Screen name={homeName} component={HomeStackScreen}/>
                <Tab.Screen name={exploreName} component={ExploreScreen}/>
                <Tab.Screen name={mapName} component={MapScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default mainNavigation;    
