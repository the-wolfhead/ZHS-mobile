import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

/*const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
  </View>
);*/

const AppointmentsScreen = () => (
  <View style={styles.container}>
    <Text>Appointments Screen</Text>
  </View>
);

const FindDoctorScreen = () => (
  <View style={styles.container}>
    <Text>Find a Doctor Screen</Text>
  </View>
);

const WalletScreen = () => (
  <View style={styles.container}>
    <Text>Wallet Screen</Text>
  </View>
);

const MoreScreen = () => (
  <View style={styles.container}>
    <Text>More Screen</Text>
  </View>
);

const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(64, 156, 255, 1)',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="FindDoctor" component={FindDoctorScreen} options={{ tabBarButton: () => <FindDoctorButton /> }} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

const FindDoctorButton = () => (
  <TouchableOpacity style={styles.findDoctorButton}>
    <Text style={styles.findDoctorButtonText}>Find a Doctor</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findDoctorButton: {
    backgroundColor: 'rgba(64, 156, 255, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  findDoctorButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomNavBar;
