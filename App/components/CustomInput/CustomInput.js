import { StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        color: '#000',
        backgroundColor: '#fff',
        padding: 18,
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 6,
    },
    input: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default CustomInput