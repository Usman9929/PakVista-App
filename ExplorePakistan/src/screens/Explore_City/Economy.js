import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './Explore_City_Style';

const Economy = () => {
  const [economyData, setEconomyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    'http://192.168.43.98:8000/farming/',
    'http://192.168.43.98:8000/handicrafts/',
    'http://192.168.43.98:8000/industries/',
  ];

  useEffect(() => {
    fetchEconomyData();
  }, []);

  const fetchEconomyData = async () => {
    try {
      const responses = await Promise.all(endpoints.map(url => axios.get(url)));
      const data = responses.map((res, index) => {
        const apiData = res.data[0]; // assuming each API returns an array
        if (!apiData) return { title: '', details: [] };

        switch (index) {
          case 0:
            return {
              title: 'Farming',
              details: [
                { label: 'Major Crops', value: apiData.major_crops },
                { label: 'Fruit Cultivation', value: apiData.fruit_cultivation },
                { label: 'Live Stock', value: apiData.livestock },
                { label: 'Methods Used', value: apiData.methods_used },
              ]
            };
          case 1:
            return {
              title: 'Handicrafts',
              details: [
                { label: 'Popular Crafts', value: apiData.popular_crafts },
                { label: 'Specialty Items', value: apiData.specialty_items },
                { label: 'Community Involvement', value: apiData.community_involvement },
              ]
            };
          case 2:
            return {
              title: 'Industries',
              details: [
                { label: 'Local Factories', value: apiData.local_factories },
                { label: 'Raw Material Sources', value: apiData.raw_material_sources },
                { label: 'Employment Contribution', value: apiData.employment_contribution },
                { label: 'Economic Impact', value: apiData.economic_impact },
              ]
            };
          default:
            return { title: '', details: [] };
        }
      });

      setEconomyData(data);
    } catch (error) {
      console.error('Error fetching economy data:', error);
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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Economy</Text>

          <View style={{ marginBottom: 60 }}>
            {economyData.map((item, index) => (
              <View key={index} style={styles.cardWrapper}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {item.details.map((detail, i) => (
                    <Text key={i} style={styles.cardText}>
                      <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                    </Text>
                  ))}
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Economy;
