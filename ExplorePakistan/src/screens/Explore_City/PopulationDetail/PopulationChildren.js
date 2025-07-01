import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const PopulationChildren = () => {
  const [formData, setFormData] = useState({
    name: '',
    biography: '',
    contribution: '',
    area_of_influence: '',
    historical_period: '',
    award_of_recognition: '',
    related_events: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    // You can later POST this to your Django API
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Celebrity</Text>
      {Object.entries(formData).map(([key, value]) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          value={value}
          onChangeText={(text) => handleChange(key, text)}
        />
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'red',
    paddingVertical: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PopulationChildren;
