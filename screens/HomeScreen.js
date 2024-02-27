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
  { id: '1', name: 'Doctor 1', specialization: 'Specialty 1', availability: 'Mon - Fri', rating: 4.5 },
  { id: '2', name: 'Doctor 2', specialization: 'Specialty 2', availability: 'Tue - Sat', rating: 4.8 },
  { id: '3', name: 'Doctor 3', specialization: 'Specialty 3', availability: 'Mon - Sun', rating: 4.2 },
  // Add more doctor data as needed
];

const SpecialtyScreen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
);


const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  // Function to render specialty screens
  const renderScene = SceneMap(
    specialties.reduce((acc, specialty, i) => {
      acc[i] = () => <SpecialtyScreen title={specialty.title} />;
      return acc;
    }, {})
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
     {/* <TabView
        navigationState={{ index, routes: specialties }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 300 }}
        renderTabBar={renderTabBar}
  />*/}
      <View style={styles.doctorsContainer}>
        <Text style={styles.doctorsHeader}>Doctors Available</Text>
       {/* {doctors.map(doctor => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor} />
       ))}*/}
       <DoctorCard />

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
