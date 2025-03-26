import { View, Text, Image, StyleSheet } from 'react-native';

const VillageDetail = ({ route }) => {
  const { village } = route.params; // Get village data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{village.name}</Text>
      <Image source={{ uri: village.image }} style={styles.image} />
      <Text style={styles.description}>{village.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  description: { fontSize: 16 },
});

export default VillageDetail;
