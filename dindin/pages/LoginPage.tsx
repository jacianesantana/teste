import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserService from '../services/UserService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    const userService = new UserService();
    const user = await userService.login(email, password);
    if (!user) {
      Alert.alert('Email ou senha incorretos', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ]);
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.svg')}
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ResetPassword')}>
        Esqueceu sua senha?
      </Text>
      <Button mode="contained" onPress={() => handleLogin()}>
        Entrar
      </Button>
      <Text style={styles.signUpText}>
        Não possui uma conta?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
          Cadastrar
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 16,
    color: 'blue',
  },
  signUpText: {
    marginTop: 16,
    textAlign: 'center',
  },
  signUpLink: {
    color: 'blue',
  },
  input: {
    marginTop: 16,
    marginBottom: 16
  }
});

export default LoginPage;
