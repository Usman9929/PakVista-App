import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Additional_Element = [
  {
    title: 'Land use Zoning',
    details: [
      { label: "Agriculturals", value: "Major crops include wheat, maize, and vegetables; small-scale orchards for fruits" },
      { label: "Residential", value: "Mix of traditional and modern houses, expanding residential areas" },
      { label: "Commercial Industrial", value: "Local markets, small industries, and cottage businesses" }
    ]
  },
  {
    title: 'Infrastructure Development',
    details: [
      { label: "Planned Project", value: "New irrigation system development and construction of a healthcare center" },
      { label: "Road Construction", value: "Widening of main roads, development of link roads to nearby villages" },
      { label: "Housing", value: "New residential plots under government schemes" }
    ]
  },
  {
    title: 'Local Business Employement',
    details: [
      { label: "Small Business", value: "Local grocery stores, carpentry shops, traditional handicrafts" },
      { label: "Job Oppurtunities", value: "Farming, teaching, construction work, retail businesses" },
      { label: "Skill Develomnent", value: "Vocational training in tailoring, IT courses, and mechanical work" }
    ]
  },
  {
    title: 'Public Service Contact',
    details: [
      {label:"Contact Water Supply", value: "Khazana Municipality Office: 0935-XXXXXXX"},
      {label:"Contact Electricity", value: "Electricity Board Helpline: 118"},
      {label:"Contact Gas Supply", value: "Gas Department Center: 0935-XXXXXXX"},
      {label:"Emergency Helpline", value: "Emergency Services: 1122"}
    ]
  },
];

const AdditionalElement = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Additional Element</Text>

        <View style={{ marginBottom: 60 }}>
          {Additional_Element.map((item, index) => (
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



export default AdditionalElement;
