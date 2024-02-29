import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentsPage = () => {
  const [scheduledAppointments, setScheduledAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    // Fetch user's appointments from the API
    const fetchAppointments = async () => {
      try {
        // Make API call to fetch appointments
        // Replace 'fetchAppointmentsApiEndpoint' with your actual API endpoint
        const response = await fetch('https://zhs-backend.onrender.com/getConsultations');
        const data = await response.json();
        // Separate scheduled and past appointments
        const now = new Date();
        const scheduled = data.filter(appointment => new Date(appointment.date) > now);
        const past = data.filter(appointment => new Date(appointment.date) <= now);
        setScheduledAppointments(scheduled);
        setPastAppointments(past);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionHeader}>Scheduled Appointments</Text>
        {scheduledAppointments.map(appointment => (
          <Text key={appointment.id}>{/* Render scheduled appointment */}</Text>
        ))}
      </View>
      <View>
        <Text style={styles.sectionHeader}>Past Appointments</Text>
        {pastAppointments.map(appointment => (
          <Text key={appointment.id}>{/* Render past appointment */}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AppointmentsPage;
