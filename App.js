import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>First app in launch build now</Text>
      <StatusBar style='auto' />

      <TouchableHighlight>
        <Image
          source={{ uri: 'https://picsum.photos/200', width: 200, height: 300 }}
        />
      </TouchableHighlight>
    </SafeAreaView>
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
