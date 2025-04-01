import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileDetail = ({ route }) => {
  const { person } = route.params; // Get data from navigation

  return (
    <View style={styles.container}>
      <Image source={person.image} style={styles.profileImage} />
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.role}>{person.role}</Text>
      <Text style={styles.bio}>{person.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold' },
  role: { fontSize: 16, color: '#666', marginBottom: 10 },
  bio: { fontSize: 14, textAlign: 'center', color: '#444' },
});

export default ProfileDetail;
