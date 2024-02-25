import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const DoctorBookingPage = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors data on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://zhs-backend.onrender.com/getDoctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors data');
        }
        const doctorsData = await response.json();
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  // Function to handle booking appointment with a doctor
  const bookAppointment = (doctorId) => {
    // Implement booking appointment logic here
    console.log('Booking appointment with doctor ID:', doctorId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Appointment with a Doctor</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.doctorItem}>
            <Text>{item.name}</Text>
            <Button title="Book Appointment" onPress={() => bookAppointment(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default DoctorBookingPage;
