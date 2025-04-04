import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Market = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Educational Services</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>School:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter school name"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>College:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter college name"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Training Center:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter training center name"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>University Presence:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter university presence details"
        />
      </View>
      
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Market;