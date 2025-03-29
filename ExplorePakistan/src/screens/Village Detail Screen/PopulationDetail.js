import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PopulationDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Population Detail</Text>
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
  },
});

export default PopulationDetail;
