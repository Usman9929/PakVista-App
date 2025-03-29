import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Economy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Economy</Text>
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

export default Economy;
