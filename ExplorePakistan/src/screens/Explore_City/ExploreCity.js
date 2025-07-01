import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreCity = ({ route }) => {
  // Destructure cityData from route.params
  const { cityData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen</Text>
      {/* Example of displaying data from cityData */}
      <Text style={styles.cityName}>{cityData.name}</Text>
      <Text style={styles.cityInfo}>{cityData.description}</Text>
      {/* Add more fields as needed */}
      <TopTabNavigator cityData={cityData} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cityInfo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ExploreCity;