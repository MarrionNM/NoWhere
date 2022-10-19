import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Screns
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;