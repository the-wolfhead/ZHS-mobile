import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFavoriteDoctors, getFavoriteLaboratories } from './backend'; // Import backend functions

const FavoritesScreen = () => {
  const [favoriteDoctors, setFavoriteDoctors] = useState([]);
  const [favoriteLaboratories, setFavoriteLaboratories] = useState([]);

  // Fetch favorite doctors data on component mount
  useEffect(() => {
    const fetchFavoriteDoctors = async () => {
      const doctors = await getFavoriteDoctors();
      setFavoriteDoctors(doctors);
    };

    fetchFavoriteDoctors();
  }, []);

  // Fetch favorite laboratories data on component mount
  useEffect(() => {
    const fetchFavoriteLaboratories = async () => {
      const laboratories = await getFavoriteLaboratories();
      setFavoriteLaboratories(laboratories);
    };

    fetchFavoriteLaboratories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Doctors</Text>
      <FlatList
        data={favoriteDoctors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.patient_name} likes {item.doctor_name}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>Favorite Laboratories</Text>
      <FlatList
        data={favoriteLaboratories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.patient_name} likes {item.laboratory_name}</Text>
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FavoritesScreen;
