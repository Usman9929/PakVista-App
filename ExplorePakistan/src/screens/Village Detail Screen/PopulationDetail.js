import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';

const Population_Detail = [
  {
    title: 'Population Children',
    details: [
      { label: "Total", value: 3200 },
      { label: "Age Range", value: "0-14 years" },
      { label: "Percentage of Total Population", value: "30%" }
    ]
  },
  {
    title: 'Population Adult',
    details: [
      { label: "Total", value: 1300 },
      { label: "Age Range", value: "60+ years" },
      { label: "Percentage of Total Population", value: "12%" }
    ]
  },
  {
    title: 'Gender Ratio Rate',
    details: [
      { label: "Male", value: 5500 },
      { label: "Female", value: 5200 },
      { label: "Male To Female Ratio", value: "1.06:1" }
    ]
  },
];

const PopulationDetail = () => {
  const navigation = useNavigation();

  const handleAddPress = (serviceTitle) => {
    switch (serviceTitle) {
      case 'Population Children':
        navigation.navigate('PoplutaionChildren');
        break;
      case 'Population Adult':
        navigation.navigate('PopulationAdult');
        break;
      case 'Gender Ratio Rate':
        navigation.navigate('GenderRatioRate');
        break;
      default:
        console.warn('No screen defined for this service');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Population Detail</Text>

        <View style={{ marginBottom: 60 }}>
          {Population_Detail.map((item, index) => (
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
                  onPress={() => handleAddPress(item.title)}
                >
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

export default PopulationDetail;
