import { ListViewComponent, StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>Explor globe</Text>
      <Button title="Go to Details"/>
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
