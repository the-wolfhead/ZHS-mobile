import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const FindDoctorScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Perform search based on searchQuery
      const response = await fetch(`https://your-backend-api.com/doctors?search=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data); // Assuming the response is an array of doctor objects
    } catch (error) {
      console.error('Error searching for doctors:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a doctor"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.name}</Text>
            <Text>{item.specialization}</Text>
            {/* Render other doctor details */}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default FindDoctorScreen;
