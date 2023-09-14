import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomButton from '../../CustomButton/CustomButton';
import CustomInput from '../../CustomInput/CustomInput';
import axios from 'axios';
const baseUrl = 'https://masurao.fr';

const SignInScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  const onSignInPressed = async () => {
    try {
      const apiKey = 'c8c4a1fa01845a4790bd865ac4013948';
      const response = await axios.post(`${baseUrl}/api/employees/login`, JSON.stringify({
        email: username,
        password: password,
      }), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Group-Authorization': `${apiKey}`,
        },
      });
      const accessToken = response.data.access_token;
      Alert.alert('Connexion réussie', 'Vous êtes connecté avec succès.');
    } catch (error) {
      console.error('Erreur de requête :', error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={styles.italicBoldText}>Welcome on board</Text>
          </Text>
        </View>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.text}>
            <Text style={styles.forgot}>Forgot your password</Text>
        </Text>
        <CustomButton text="Sign In" onPress={onSignInPressed} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  logo: {
    width: 350,
    height: 350,
  },
  textContainer: {
    textAlign: 'left',
    paddingVertical: 10,
  },
  text: {
    color: '#fff',
  },
  italicBoldText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 26,
  },
  forgot: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'right'
  },
});

export default SignInScreen;
