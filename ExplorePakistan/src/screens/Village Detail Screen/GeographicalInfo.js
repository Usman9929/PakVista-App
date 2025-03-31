import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Geographical_Info = [
  {
    title: 'Local Information',
    details: [
      { label: "Coordinates", value: "34.8296° N, 71.8316° E" },
      { label: "Nearest Landmark", value: "Timergara Bazaar" },
      { label: "Distance From Major City", value: "3 km from Timergara city center" }
    ]
  },
  {
    title: 'Geo Area',
    details: [
      { label: "Total Area", value: "5.6 sq km" },
      { label: "Topography", value: "Mostly hilly with some plain agricultural land" },
      { label: "Land Use", value: "Agriculture, residential areas, small commercial spaces" }
    ]
  },
  {
    title: 'Climate Detail',
    details: [
      {label:"Average Temperature", value: "25°C annually"},
      {label:"Rainfall", value: "900-1100 mm per year"},
      {label:"Seasonal Variations", value: "Hot summers (up to 40°C), mild winters (5-20°C), moderate rainfall in monsoon (July-August)"}
    ]
  },
];

const GeographicalInfo = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Geographical Information</Text>

        <View style={{ marginBottom: 60 }}>
          {Geographical_Info.map((item, index) => (
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
    </ScrollView >
  );
};



export default GeographicalInfo;
