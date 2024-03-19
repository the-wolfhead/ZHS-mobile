import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from './screens/BottomNavBar';
import SignInPage from './screens/SignInPage'; // Import the SignInPage component

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignIn" component={SignInPage} /> {/* Add the SignInPage as a screen */}
        <Tab.Screen name="Home" component={BottomNavBar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
