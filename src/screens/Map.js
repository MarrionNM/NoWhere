import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>View Map</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate('Explore')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
