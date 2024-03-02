import { useTinyBaseDevTools } from '@dev-plugins/tinybase';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useCounterStore } from './store';

export default function App() {
  const counter = useCounterStore((state) => state.count);
  useTinyBaseDevTools(useCounterStore);
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
      <Button
        title="Increment"
        onPress={() => useCounterStore.getState().increment()}
      />
      <Button
        title="Decrement"
        onPress={() => useCounterStore.getState().decrement()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
