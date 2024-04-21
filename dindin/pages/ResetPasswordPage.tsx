import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserService from '../services/UserService';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const navigation = useNavigation();
  const userService = new UserService();

  const handleSendCode = () => {
    // Here you would typically send the confirmation code to the user's email.
    Alert.alert('Seu código é 0000', '', [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ]);
    setIsCodeSent(true);
  };

  const handleConfirmCode = () => {
    // Here you would typically check the confirmation code against your backend.
    // For this example, we'll just assume any code is valid.
    if (confirmationCode !== '0000') {
      Alert.alert('Código inválido', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ]);
      return;
    }
    setIsCodeConfirmed(true);
  };

  const handleResetPassword = async () => {
    // Here you would typically send the new password to your backend.
    // For this example, we'll just log the new password.
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Senhas não conferem', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ]);
      return;
    } else if (newPassword.length < 6) {
      Alert.alert('Senha muito curta', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ]);
      return;
    } else {
      try {
        // Save the new password in the database using the UserService
        await userService.updatePassword(email, newPassword);
        Alert.alert('Senha redefinida com sucesso', '', [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]);
      } catch (error) {
        console.error('Error saving new password:', error);
        Alert.alert('Erro ao redefinir senha', '', [
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.svg')}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button mode="contained" onPress={handleSendCode}>
        Enviar Código
      </Button>
      {isCodeSent && !isCodeConfirmed && (
        <>
          <TextInput
            label="Código de confirmação"
            value={confirmationCode}
            onChangeText={setConfirmationCode}
            keyboardType="numeric"
            maxLength={4}
          />
          <Button mode="contained" onPress={handleConfirmCode}>
            Confirmar Código
          </Button>
        </>
      )}
      {isCodeConfirmed && (
        <>
          <TextInput
            label="Nova Senha"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            label="Confirme a Nova Senha"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
          <Button mode="contained" onPress={handleResetPassword}>
            Redefinir Senha
          </Button>
        </>
      )}
      <Text style={styles.loginText}>
        Lembrou da sua senha?{" "} 
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
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
  loginText: {
    marginTop: 16,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
  },
});

export default ResetPasswordPage;