import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './Explore_City_Style';
import { useNavigation } from '@react-navigation/native';

const GeographicalInfo = () => {
  const navigation = useNavigation()
  const [geoData, setGeoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    'http://192.168.43.98:8000/location-information/',
    'http://192.168.43.98:8000/geo-area/',
    'http://192.168.43.98:8000/climate-detail/',
  ];

  useEffect(() => {
    fetchGeoData();
  }, []);

  const fetchGeoData = async () => {
    try {
      const responses = await Promise.all(endpoints.map(url => axios.get(url)));
      const data = responses.map((res, index) => {
        const apiData = res.data[0]; // assuming response is an array
        if (!apiData) return { title: '', details: [] };

        switch (index) {
          case 0:
            return {
              title: 'Location Information',
              details: [
                { label: 'Coordinates', value: apiData.coordinates },
                { label: 'Nearest Landmark', value: apiData.nearest_landmark },
                { label: 'Distance From Major City', value: apiData.distance_from_major_city },
              ]
            };
          case 1:
            return {
              title: 'Geo Area',
              details: [
                { label: 'Total Area', value: apiData.total_area },
                { label: 'Topography', value: apiData.topography },
                { label: 'Land Use', value: apiData.land_use },
              ]
            };
          case 2:
            return {
              title: 'Climate Detail',
              details: [
                { label: 'Average Temperature', value: apiData.average_temperature },
                { label: 'Rainfall', value: apiData.rainfall },
                { label: 'Seasonal Variations', value: apiData.seasonal_variations },
              ]
            };
          default:
            return { title: '', details: [] };
        }
      });

      setGeoData(data);
    } catch (error) {
      console.error('Error fetching geographical data:', error);
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
          <Text style={styles.sectionTitle}>Geographical Information</Text>

          <View style={{ marginBottom: 60 }}>
            {geoData.map((item, index) => (
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
                      if (item.title === 'Location Information') {
                        navigation.navigate('LocalInformation');
                      } else if (item.title === 'Geo Area') {
                        navigation.navigate('GeoArea');
                      } else if (item.title === 'Climate Detail') {
                        navigation.navigate('ClimateDetail');
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

export default GeographicalInfo;
