import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuthRequest } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';

import Constants from 'expo-constants';

const LoginScreen = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      scopes: ['openid', 'profile', 'email'],
      clientId: Constants.manifest.extra.googleAuthClientId,
    },
    Google
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Handle successful authentication
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => {
          promptAsync();
        }}
      />
      <Button
  title="Sign in with Apple"
  onPress={async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });
      // Handle successful authentication with Apple
    } catch (e) {
      if (e.code === 'ERR_CANCELED') {
        // Handle user cancellation
      } else {
        // Handle other errors
      }
    }
  }}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
