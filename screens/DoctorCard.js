// DoctorCard.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DoctorCard = () => {
  const [doctor, setDoctor] = useState(null);

  // Fetch doctor information from backend API
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch('https://zhs-backend.onrender.com/getDoctors'); // Replace URL with your backend API endpoint
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctor();
  }, []);

  if (!doctor) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: doctor.profilePic }} style={styles.profilePic} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.availability}>Availability: {doctor.availability}</Text>
        <Text style={styles.rating}>Rating: {doctor.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 16,
    color: 'gray',
  },
  availability: {
    fontSize: 14,
  },
  rating: {
    fontSize: 14,
  },
});

export default DoctorCard;
