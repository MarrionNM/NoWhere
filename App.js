import { SafeAreaView  } from 'react-native';

import * as React from 'react';
import Nav from './src/navigation/mainNavigation'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Nav/>
    </SafeAreaView>
  );
}
