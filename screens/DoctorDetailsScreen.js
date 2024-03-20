// DoctorDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoctorDetailsScreen = ({ route }) => {
  const { doctor } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.availability}>Availability: {doctor.availability}</Text>
        <Text style={styles.rating}>Rating: {doctor.rating}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis sem vel tellus hendrerit
          condimentum. Fusce auctor fringilla nisl, at condimentum urna tincidunt nec.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  infoContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  descriptionContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  description: {
    fontSize: 16,
  },
});

export default DoctorDetailsScreen;
