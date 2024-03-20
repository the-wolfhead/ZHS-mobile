import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

const CreateAccountScreen = () => {
  const handleTermsOfUsePress = () => {
    // Handle navigation to Terms of Use screen
  };

  const handlePrivacyPolicyPress = () => {
    // Handle navigation to Privacy Policy screen
  };

  const handleSignInPress = () => {
    // Handle navigation to Sign In screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Account</Text>
      </View>
      <Text style={styles.subHeader}>Let’s get you started</Text>
      <Text style={styles.description}>
        It’s free, secure and easy. We will help you keep track of your health by managing your appointments
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.phoneInput}>
        <Text style={styles.phonePrefix}>+234</Text>
        <TextInput style={styles.input} placeholder="Enter your phone number" />
      </View>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleSignInPress}>
          <Text style={styles.signInLink}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.termsText}>
        By creating an account you agree to have read and accept ZHS’s
        <Text style={styles.link} onPress={handleTermsOfUsePress}> Terms of Use </Text>
        and 
        <Text style={styles.link} onPress={handlePrivacyPolicyPress}> Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    width: 390,
    height: 68,
    paddingTop: 24,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 20,
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'left',
    marginTop: 10,
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 44,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.56,
    borderColor: 'rgba(193, 195, 244, 1)',
    marginTop: 8,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.56,
    borderColor: 'rgba(193, 195, 244, 1)',
    borderRadius: 8,
    marginTop: 8,
  },
  phonePrefix: {
    paddingHorizontal: 12,
    borderRightWidth: 0.56,
    borderColor: 'rgba(193, 195, 244, 1)',
  },
  createAccountButton: {
    width: '100%',
    height: 44,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 64, 221, 1)',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 20,
    textAlign: 'center',
  },
  googleButton: {
    width: '100%',
    height: 48,
    padding: 14,
    borderRadius: 8,
    backgroundColor: 'rgba(216, 216, 220, 1)',
    borderWidth: 1,
    borderColor: 'rgba(247, 247, 247, 1)',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  signInLink: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: 'blue',
  },
  termsText: {
    marginTop: 20,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default CreateAccountScreen;
