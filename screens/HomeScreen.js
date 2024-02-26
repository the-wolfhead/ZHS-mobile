import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DoctorCard from './DoctorCard'; // Import DoctorCard component

// Dummy data for specialties and doctors
const specialties = [
  { id: '1', title: 'Specialty 1' },
  { id: '2', title: 'Specialty 2' },
  { id: '3', title: 'Specialty 3' },
];

const doctors = [
  { id: '1', name: 'Doctor 1' },
  { id: '2', name: 'Doctor 2' },
  { id: '3', name: 'Doctor 3' },
  // Add more doctor data as needed
];

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  // Function to render specialty screens
  const renderScene = SceneMap({
    0: () => <SpecialtyScreen />,
    1: () => <SpecialtyScreen />,
    2: () => <SpecialtyScreen />,
    // Add more specialty screens as needed
  });

  // Component for rendering specialty screen
  const SpecialtyScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{specialties[index].title}</Text>
    </View>
  );

  // Component for rendering tab bar
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route }) => (
        <Text style={{ color: 'black', margin: 8 }}>{route.title}</Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes: specialties }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 300 }}
        renderTabBar={renderTabBar}
      />
      <View style={styles.doctorsContainer}>
        <Text style={styles.doctorsHeader}>Doctors Available</Text>
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  doctorsContainer: {
    flex: 1,
    padding: 10,
  },
  doctorsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
