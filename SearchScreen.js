// SearchScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    // Make HTTP GET request to backend API with search query
    axios.get(`http://backend-api-url/labs?name=${searchQuery}`)
      .then(response => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('An error occurred while fetching search results.');
        setLoading(false);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter search query"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
      {error && <Text style={{ marginTop: 20, color: 'red' }}>{error}</Text>}
      {searchResults.length === 0 && !loading && <Text style={{ marginTop: 20 }}>No search results found.</Text>}
      <FlatList
        data={searchResults}
        keyExtractor={item => item.lab_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Text>Lab: {item.lab_name}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Contact: {item.contact_info}</Text>
            <Text>Available Tests: {item.available_tests.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
