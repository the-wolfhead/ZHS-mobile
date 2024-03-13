import React from 'react';
import { View, Button } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in'; // Example import for Google sign-in
import * as AppleAuthentication from 'expo-apple-authentication'; // Example import for Apple sign-in
import { storeToken } from './SecureStore'; // Assuming SecureStore functions are in a separate file

const SignInPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, idToken } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        // Store the Google identity token
        await storeToken('googleIdToken', idToken);
        // Navigate to the next screen or perform any other actions
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const { identityToken } = await AppleAuthentication.signInAsync();
      // Store the Apple identity token
      await storeToken('appleIdentityToken', identityToken);
      // Navigate to the next screen or perform any other actions
    } catch (error) {
      console.error('Apple sign-in error:', error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      <Button title="Sign in with Apple" onPress={handleAppleSignIn} />
    </View>
  );
};

export default SignInPage;
