import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { auth } from '../firebase'; // Import the auth module from your firebase.js file
import { useNavigation } from '@react-navigation/native';

const SignInPage = () => {
  const navigation = useNavigation(); // Initialize navigation

  const signInWithGoogle = async () => {
    try {
      // Implement Google sign-in
      const { idToken } = await auth().signInWithGoogle();
      console.log('Google ID token:', idToken);
      // Handle successful sign-in, navigate to Home screen
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle sign-in error
      Alert.alert('Sign In Error', 'Failed to sign in with Google. Please try again later.');
    }
  };

  const signInWithApple = async () => {
    try {
      // Implement Apple sign-in
      const { idToken } = await auth().signInWithApple();
      console.log('Apple ID token:', idToken);
      // Handle successful sign-in, navigate to Home screen
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing in with Apple:', error);
      // Handle sign-in error
      Alert.alert('Sign In Error', 'Failed to sign in with Apple. Please try again later.');
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
      <Button title="Sign in with Apple" onPress={signInWithApple} />
    </View>
  );
};

export default SignInPage;
