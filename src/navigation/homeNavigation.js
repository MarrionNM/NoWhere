import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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