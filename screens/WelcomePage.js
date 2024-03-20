const WelcomePage = () => {
    const navigation = useNavigation(); // Initialize navigation
  
    const goToSignInPage = () => {
      navigation.navigate('CreateAccount'); // Navigate to SignInPage
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.ellipseContainer}>
          <View style={styles.ellipse} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image source={require('./assets/welcome/welcome1.jpg')} style={styles.slideImage} />
          <Image source={require('./assets/welcome/welcome2.jpg')} style={styles.slideImage} />
          <Image source={require('./assets/welcome/welcome3.jpg')} style={styles.slideImage} />
        </ScrollView>
        <Text style={styles.heading}>Connect with Care, Anywhere</Text>
        <Text style={styles.subHeading}>
          Doctors, Hospitals, Labs, and Clinics, Right at Your Fingertips!
          Your Health Hub on Demand
        </Text>
        <TouchableOpacity style={styles.createAccountButton} onPress={goToSignInPage}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ellipseContainer: {
    alignItems: 'center',
  },
  ellipse: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(0, 64, 221, 1)',
    marginBottom: 20,
  },
  slideImage: {
    maxHeight: 367,
    width: '100%',
    borderRadius: 10,
    marginRight: 10,
  },
  heading: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  createAccountButton: {
    width: 358,
    height: 44,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 64, 221, 1)',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomePage;
