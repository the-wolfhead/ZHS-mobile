import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getDoctors } from 'https://zhs-backend.onrender.com/getDoctors'; // Import backend function to fetch doctors

const DoctorBookingPage = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors data on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      const doctorsData = await getDoctors();
      setDoctors(doctorsData);
    };

    fetchDoctors();
  }, []);

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
