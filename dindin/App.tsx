import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ResetPasswordPage from './pages/ResetPasswordPage';

export type RootStackParams = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  ResetPassword: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;