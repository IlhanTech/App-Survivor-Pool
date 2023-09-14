import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, SafeAreaView, Button, Platform } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import SignInScreen from './components/screens/SignInScreen/SignInScreen';

function App() {

    return (
      <SafeAreaView style={styles.root}>
        <SignInScreen />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
