import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './Explore_City_Style';
import { useNavigation } from '@react-navigation/native';

const PopulationDetail = () => {
    const navigation = useNavigation();
  const [populationData, setPopulationData] = useState([]);
  const [loading, setLoading] = useState(true);

  const endpoints = [
    'http://192.168.43.98:8000/population-children/',
    'http://192.168.43.98:8000/population-adult/',
    'http://192.168.43.98:8000/population-elderly/',
    'http://192.168.43.98:8000/gender-ratio/',
    'http://192.168.43.98:8000/population-literacy/',
  ];

  useEffect(() => {
    fetchPopulationData();
  }, []);

  const fetchPopulationData = async () => {
    try {
      const responses = await Promise.all(endpoints.map(url => axios.get(url)));
      const data = responses.map((res, index) => {
        const apiData = res.data[0]; // Assuming response is array with 1 object
        if (!apiData) return { title: '', details: [] };

        switch (index) {
          case 0:
            return {
              title: 'Population Children',
              details: [
                { label: 'Total', value: apiData.total },
                { label: 'Age Range', value: apiData.age_range },
                { label: 'Percentage of Total Population', value: apiData.percentage_of_total_population + '%' },
              ]
            };
          case 1:
            return {
              title: 'Population Adult',
              details: [
                { label: 'Total', value: apiData.total },
                { label: 'Age Range', value: apiData.age_range },
                { label: 'Percentage of Total Population', value: apiData.percentage_of_total_population + '%' },
              ]
            };
          case 2:
            return {
              title: 'Population Elderly',
              details: [
                { label: 'Total', value: apiData.total },
                { label: 'Age Range', value: apiData.age_range },
                { label: 'Percentage of Total Population', value: apiData.percentage_of_total_population + '%' },
              ]
            };
          case 3:
            return {
              title: 'Gender Ratio',
              details: [
                { label: 'Male', value: apiData.male },
                { label: 'Female', value: apiData.female },
                { label: 'Male to Female Ratio', value: apiData.male_to_female_ratio },
              ]
            };
          case 4:
            return {
              title: 'Population Literacy Rate',
              details: [
                { label: 'Overall Literacy Rate', value: apiData.overall_literacy_rate + '%' },
                { label: 'Male Literacy Rate', value: apiData.male_literacy_rate + '%' },
                { label: 'Female Literacy Rate', value: apiData.female_literacy_rate + '%' },
              ]
            };
          default:
            return { title: '', details: [] };
        }
      });
      setPopulationData(data);
    } catch (error) {
      console.error('Error fetching population data:', error);
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
          <Text style={styles.sectionTitle}>Population Detail</Text>

          <View style={{ marginBottom: 60 }}>
            {populationData.map((item, index) => (
              <View key={index} style={styles.cardWrapper}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {item.details.map((detail, i) => (
                    <Text key={i} style={styles.cardText}>
                      <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                    </Text>
                  ))}
                  <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('PopulationChildren')}>
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

export default PopulationDetail;
