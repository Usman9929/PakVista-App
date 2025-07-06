import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';

const CommunityServices = ({ route }) => {
  const { villageData } = route.params;
  const navigation = useNavigation();
  const [communityData, setCommunityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://192.168.43.98:8000/community_services/?village_id=${villageData.village_id}`)
      .then(response => {
        setCommunityData(response.data[0]); // Only one record per village
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching community data:", error);
        setLoading(false);
      });
  }, [villageData]);

  const handleAddPress = (section) => {
    const map = {
      'Education': 'EducationAddButton',
      'Health Care Facilities': 'HealthCare',
      'Market': 'Market',
      'Transportations': 'Transportation',
      'Utilities': 'Utilities',
      'Recreational Facilities': 'Recreational',
    };
    if (map[section]) {
      navigation.navigate(map[section], { villageId: villageData.village_id });
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ flex: 1 }} />;
  }

  if (!communityData) {
    return <Text>No data available</Text>;
  }

  const sections = [
    { title: 'Education', data: communityData.education?.[0] },
    { title: 'Health Care Facilities', data: communityData.healthcare_facilities?.[0] },
    { title: 'Market', data: communityData.market?.[0] },
    { title: 'Transportations', data: communityData.transportations?.[0] },
    { title: 'Utilities', data: communityData.utilities?.[0] },
    { title: 'Recreational Facilities', data: communityData.recreational_facilities?.[0] },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Community Services</Text>
        <View style={{ marginBottom: 60 }}>
          {sections.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.data ? (
                  Object.entries(item.data).map(([key, value]) => {
                    if (['id', 'submitted_by', 'is_approved', 'community_id'].includes(key)) return null;
                    return (
                      <Text key={key} style={styles.cardText}>
                        <Text style={styles.bold}>{key.replace(/_/g, ' ')}:</Text> {value || 'N/A'}
                      </Text>
                    );
                  })
                ) : (
                  <Text style={styles.cardText}>No Data</Text>
                )}
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

export default CommunityServices;
