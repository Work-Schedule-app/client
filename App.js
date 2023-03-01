import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/signUp';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <SignUp></SignUp>
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
