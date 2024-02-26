import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from './screens/BottomNavBar';
import DoctorBookingPage from './screens/DoctorBookingPage';
import DoctorListScreen from './screens/DoctorListScreen'

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer>
  );
};

export default App;
