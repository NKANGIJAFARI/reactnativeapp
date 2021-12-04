// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.imageContainer}>
        <ImageBackground
          source={require('./assets/background.jpg')}
          style={styles.bgImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Go to Details' color='pink' />
        <Button title='Go to Details' color='green' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgImage: { width: 400, height: '100%' },
});
