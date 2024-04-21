import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserService from '../services/UserService';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigation = useNavigation();
    const userService = new UserService();

    const handleSignUp = async () => {
        try {
            // Perform validation checks here
            if (!name || !cpf || !email || !password || !passwordConfirmation) {
                console.error('Todos os campos são obrigatórios');
                Alert.alert('Todos os campos são obrigatórios', '', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
                return;
            } else if (password !== passwordConfirmation) {
                console.error('As senhas não conferem');
                Alert.alert('As senhas não conferem', '', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
                return;
            }

            // Create a user object with the form data
            const user = {
                name,
                cpf,
                email,
                password,
                passwordConfirmation
            };

            // Call the UserService to register the user
            const userCreated = await userService.createUser(user);
            if (userCreated !== undefined) {
                console.log('Usuário cadastrado com sucesso');
                Alert.alert('Usuário cadastrado com sucesso', '', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
                navigation.navigate('Login');
            } else {
                console.error('Erro ao cadastrar usuário');
                Alert.alert('Erro ao cadastrar usuário', '', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]);
            }
        } catch (error) {
            console.error('Error ao cadastrar usuário', error);
            Alert.alert('Erro ao cadastrar usuário', '', [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.svg')} style={styles.logo} />
            <TextInput
                style={styles.input}
                label="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                label="CPF"
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput
                style={styles.input}
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                label="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                label="Confirmação de senha"
                secureTextEntry
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
            />
            <Button style={styles.button} mode="contained" onPress={handleSignUp}>
                Cadastrar
            </Button>
            <Text style={styles.loginText}>
                Já possui um cadastro?{' '}
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
    input: {
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'green'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 16,
        alignSelf: 'center'
    },
    loginText: {
        marginTop: 16,
        textAlign: 'center',
        verticalAlign: 'bottom'
    },
    loginLink: {
        color: 'blue',
    },
});

export default SignUpPage;