import * as SecureStore from 'expo-secure-store';

// Storing the identity token
const storeToken = async (key, token) => {
  try {
    await SecureStore.setItemAsync(key, token);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// Retrieving the identity token
const retrieveToken = async (key) => {
  try {
    const token = await SecureStore.getItemAsync(key);
    if (token) {
      console.log('Token retrieved successfully:', token);
      return token;
    } else {
      console.log('Token not found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

// Example usage
const key = 'googleIdToken';
const idToken = 'exampleIdToken123'; // This would be the actual token obtained after authentication

// Storing the token
storeToken(key, idToken);

// Retrieving the token
const retrievedToken = retrieveToken(key);
console.log('Retrieved token:', retrievedToken);
