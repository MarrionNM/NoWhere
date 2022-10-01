import { ListViewComponent, StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button title="Go to Details"
        // onPress={() => navigation.navigate('ExploreScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
