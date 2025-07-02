import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './Explore_City_Style';
import { useNavigation } from '@react-navigation/native';

const CulturalInformation = () => {
   const navigation = useNavigation();
  const [culturalData, setCulturalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    'http://192.168.43.98:8000/local_festival/',
    'http://192.168.43.98:8000/traditions/',
    'http://192.168.43.98:8000/language_spoken/',
  ];

  useEffect(() => {
    fetchCulturalData();
  }, []);

  const fetchCulturalData = async () => {
    try {
      const responses = await Promise.all(endpoints.map(url => axios.get(url)));
      const data = responses.map((res, index) => {
        const apiData = res.data[0]; // Assuming each returns a single object in an array
        if (!apiData) return { title: '', details: [] };

        switch (index) {
          case 0:
            return {
              title: 'Local Festival',
              details: [
                { label: 'Spring Festival', value: apiData.spring_festival },
                { label: 'Harvest Festival', value: apiData.harvest_festival },
                { label: 'Eid Celebrations', value: apiData.eid_celebrations },
              ]
            };
          case 1:
            return {
              title: 'Traditions',
              details: [
                { label: 'Traditional Dress', value: apiData.traditional_dress },
                { label: 'Hospitality', value: apiData.hospitality },
                { label: 'Storytelling Evenings', value: apiData.storytelling_evenings },
                { label: 'Wedding Ceremonies', value: apiData.wedding_ceremonies },
              ]
            };
          case 2:
            return {
              title: 'Languages Spoken',
              details: [
                { label: 'Primary Language', value: apiData.primary_language },
                { label: 'Secondary Language', value: apiData.secondary_language },
                { label: 'Additional Languages', value: apiData.additional_languages },
              ]
            };
          default:
            return { title: '', details: [] };
        }
      });

      setCulturalData(data);
    } catch (error) {
      console.error('Error fetching cultural data:', error);
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
          <Text style={styles.sectionTitle}>Cultural Background</Text>

          <View style={{ marginBottom: 60 }}>
            {culturalData.map((item, index) => (
              <View key={index} style={styles.cardWrapper}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {item.details.map((detail, i) => (
                    <Text key={i} style={styles.cardText}>
                      <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                    </Text>
                  ))}
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                      if (item.title === 'Local Festival') {
                        navigation.navigate('Cultural_LocalFestival');
                      } else if (item.title === 'Traditions') {
                        navigation.navigate('Traditions');
                      } else if (item.title === 'Languages Spoken') {
                        navigation.navigate('LanguagSpoken');
                      } 
                    }}
                  >
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

export default CulturalInformation;
