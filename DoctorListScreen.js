// DoctorListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const DoctorListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from backend API
    axios.get('http://your-backend-api-url/doctors')
      .then(response => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('An error occurred while fetching doctors data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>An error occurred: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Doctors</Text>
      <FlatList
        data={doctors}
        keyExtractor={doctor => doctor.doctor_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.specialization}</Text>
            <Text>Contact: {item.contact_info}</Text>
            {/* Add more doctor details as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default DoctorListScreen;
