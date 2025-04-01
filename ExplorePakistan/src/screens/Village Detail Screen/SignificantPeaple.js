import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const people = [
  { id: 1, name: 'Usman', role: 'Education Pioneer', image: require('../.././assets/images/timergaraImage_1.jpg') },
  { id: 2, name: 'Ziyab', role: 'Environmental Activist', image: require('../.././assets/images/timergaraImage_1.jpg') },
  { id: 3, name: 'Uzair', role: 'Master Craftsman, Traditional Pottery', image: require('../.././assets/images/timergaraImage_1.jpg') },
  { id: 4, name: 'Dr. Asma Parveen', role: 'Rural Healthcare Pioneer', image: require('../.././assets/images/timergaraImage_1.jpg') },
];

const SignificantPeople = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Significant People</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New</Text>
      </TouchableOpacity>
      
      {/* Display People in Grid Layout */}
      <FlatList
        data={people}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Two columns like in the reference image
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.personCard}>
            <Image source={item.image} style={styles.personImage} />
            <Text style={styles.personName}>{item.name}</Text>
            <Text style={styles.personRole}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign:"center" },
  addButton: { position: 'absolute', right: 12, top: 15, backgroundColor: '#E53935', padding: 10, borderRadius: 15 },
  addButtonText: { color: '#fff', fontSize: 12, fontWeight:"bold"},
  row: { justifyContent: 'space-between', marginBottom: 15 },
  personCard: { alignItems: 'center', width: '48%', padding: 10, borderRadius: 15, marginTop:15 },
  personImage: { width: 70, height: 70, borderRadius: 40 },
  personName: { fontSize: 14, fontWeight: 'bold', marginTop: 5, textAlign: 'center' },
  personRole: { fontSize: 12, color: '#666', textAlign: 'center' },
});

export default SignificantPeople;
