import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
            <Button title="Go to Details"
        onPress={() => navigation.navigate('Explore')}
      />
      <MapView provider={PROVIDER_GOOGLE} />
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
