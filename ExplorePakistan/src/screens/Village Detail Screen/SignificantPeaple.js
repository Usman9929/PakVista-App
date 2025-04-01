import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const people = [
  { id: 1, name: 'Usman', role: 'Education Pioneer', image: require('../.././assets/images/profile_1.jpg'), bio: "Usman has revolutionized education in rural areas." },
  { id: 2, name: 'Ziyab', role: 'Environmental Activist', image: require('../.././assets/images/profile_2.jpg'), bio: "Ziyab has been actively working to protect the environment." },
  { id: 3, name: 'Uzair', role: 'Master Craftsman, Traditional Pottery', image: require('../.././assets/images/profile_3.jpg'), bio: "Uzair is known for his beautiful traditional pottery designs." },
  { id: 4, name: 'Dr. Asma Parveen', role: 'Rural Healthcare Pioneer', image: require('../.././assets/images/profile_4.jpg'), bio: "Dr. Asma has improved healthcare facilities in villages." },
  { id: 5, name: 'Ali Khan', role: 'Social Entrepreneur', image: require('../.././assets/images/profile_3.jpg'), bio: "Ali Khan is helping youth by creating job opportunities." },
];

const SignificantPeople = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Significant People</Text>

      <FlatList
        data={people}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Two-column grid layout
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.personCard}
            onPress={() => navigation.navigate('ProfileDetail', { person: item })}
          >
            <Image source={item.image} style={styles.personImage} />
            <Text style={styles.personName}>{item.name}</Text>
            <Text style={styles.personRole}>{item.role}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  personCard: { alignItems: 'center', width: '48%', padding: 10, borderRadius: 15, marginTop: 15, backgroundColor: '#f8f8f8' },
  personImage: { width: 80, height: 80, borderRadius: 40 },
  personName: { fontSize: 14, fontWeight: 'bold', marginTop: 5, textAlign: 'center' },
  personRole: { fontSize: 12, color: '#666', textAlign: 'center' },
});

export default SignificantPeople;
