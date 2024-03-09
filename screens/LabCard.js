// LabCard.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const LabCard = () => {
  const [labs, setLabs] = useState([]);

  // Fetch lab information from backend API
  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch('https://zhs-backend.onrender.com/getLabs'); // Replace URL with your backend API endpoint
        const data = await response.json();
        setLabs(data);
      } catch (error) {
        console.error('Error fetching labs:', error);
      }
    };

    fetchLabs();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {labs.map((lab, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: lab.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{lab.lab_name}</Text>
            <Text style={styles.location}>{lab.tests_offered}</Text>
            <Text style={styles.location}>{lab.location}</Text>
            <Text style={styles.rating}>Rating: {lab.rating}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
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
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
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
  location: {
    fontSize: 16,
    color: 'gray',
  },
  rating: {
    fontSize: 14,
  },
});

export default LabCard;
