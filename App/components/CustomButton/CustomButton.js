import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 60,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CustomButton