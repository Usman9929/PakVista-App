import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const TouristAttraction = ({ route }) => {
  const { villageData } = route.params;
  const navigation = useNavigation();
  const [touristData, setTouristData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://192.168.43.98:8000/tourist_attractions/?village_id=${villageData.village_id}`)
      .then(res => {
        setTouristData(res.data[0]); // Assuming only one record per village
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching tourist attraction data:", err);
        setLoading(false);
      });
  }, [villageData]);

  const handleAddPress = (section) => {
    const map = {
      'Natural Land Mark': 'NaturalLandmark',
      'Cultural And Historical Places': 'CulturalandHistorical',
      'Local Events': 'localEvents',
    };
    if (map[section]) {
      navigation.navigate(map[section], { villageId: villageData.village_id });
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;
  if (!touristData) return <Text>No data available</Text>;

  const natural = touristData.natural_landmark?.[0];
  const cultural = touristData.cultural_historical_places?.[0];
  const local = touristData.local_events?.[0];

  const Tourist_Attraction = [
    {
      title: 'Natural Land Mark',
      details: [
        { label: "Rivers", value: natural?.rivers },
        { label: "Lakes", value: natural?.lakes },
        { label: "Mountains", value: natural?.mountains },
        { label: "Forest", value: natural?.forest }
      ]
    },
    {
      title: 'Cultural And Historical Places',
      details: [
        { label: "Temples", value: cultural?.temples },
        { label: "Old Building", value: cultural?.old_building },
        { label: "Monuments", value: cultural?.monuments },
        { label: "Museums", value: cultural?.museums }
      ]
    },
    {
      title: 'Local Events',
      details: [
        { label: "Festivals", value: local?.festivals },
        { label: "Exhibitions", value: local?.exhibitions },
        { label: "Cultural Performance", value: local?.cultural_performance }
      ]
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tourist Attraction</Text>

        <View style={{ marginBottom: 60 }}>
          {Tourist_Attraction.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.details.map((detail, i) => (
                  <Text key={i} style={styles.cardText}>
                    <Text style={styles.bold}>{detail.label}:</Text> {detail.value || 'N/A'}
                  </Text>
                ))}
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddPress(item.title)}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TouristAttraction;
