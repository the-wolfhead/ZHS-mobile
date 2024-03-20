import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from './screens/BottomNavBar';
import SignInPage from './screens/SignInPage'; // Import the SignInPage component
import WelcomePage from './screens/WelcomePage';
import CreateAccountScreen from './screens/CreateAccountScreen';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomePage} /> 
        <Tab.Screen name="CreateAccount" component={CreateAccountScreen} /> {/* Add the CreateAccountScreen as a screen */}
        <Tab.Screen name="SignIn" component={SignInPage} /> {/* Add the SignInPage as a screen */}
        <Tab.Screen name="Home" component={BottomNavBar} />
        <Tab.Screen name="DoctorDetails" component={DoctorDetailsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
