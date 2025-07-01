import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './Explore_City_Style';

const HistoricalBackground = () => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);

  const endpoint = 'http://192.168.43.98:8000/historical-background/';

  useEffect(() => {
    fetchHistoricalData();
  }, []);

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(endpoint);
      const data = response.data[0]; // assuming first object only
      if (data) {
        const structured = {
          title: 'Historical Background',
          details: [
            { label: 'Founding Year', value: data.founding_year },
            { label: 'Founders', value: data.founders },
            { label: 'Historical Events', value: data.historical_events },
            { label: 'Cultural Significance', value: data.cultural_significance },
            { label: 'Monuments or Landmarks', value: data.monuments_or_landmarks },
            { label: 'Ethnic Background', value: data.ethnic_background },
            { label: 'Famous Persons', value: data.famous_persons },
            { label: 'Historic Sites Nearby', value: data.historic_sites_nearby },
            { label: 'Development Over Time', value: data.development_over_time },
          ],
        };
        setHistoricalData(structured);
      }
    } catch (error) {
      console.error('Error fetching historical data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!historicalData) {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>No Historical Data Available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>{historicalData.title}</Text>

          <View style={{ marginBottom: 60 }}>
            <View style={styles.cardWrapper}>
              <View style={styles.card}>
                {historicalData.details.map((detail, i) => (
                  <Text key={i} style={styles.cardText}>
                    <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                  </Text>
                ))}
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoricalBackground;
