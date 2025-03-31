import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Cultural_Info = [
  {
    title: 'Local Festival',
    details: [
      { label: "Spring Festival", value: "Traditional music and dance" },
      { label: "Harvest Festival", value: "Celebration with local food and fairs" },
      { label: "Eid Celebration", value: "Community gatherings, feasts, and charity" }
    ]
  },
  {
    title: 'Traditions',
    details: [
      { label: "Traditional Dress", value: "Shalwar Kameez with Pakol cap" },
      { label: "Hospitality", value: "Guests are honored with tea and food" },
      { label: "Storytelling Evenings", value: "Elderly share folk tales and history" },
      { label: "Wedding Ceremonies", value: "Multi-day celebrations with music and rituals" }
    ]
  },
  {
    title: 'Language Spoken',
    details: [
      {label:"Primary Language", value: "Pashto"},
      {label:"Secondary Language", value: "Urdu"},
      {label:"Additional Language", value: "English (limited use)"}
    ]
  },
];

const CulturalInfo = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Cultural Information</Text>

        <View style={{ marginBottom: 60 }}>
          {Cultural_Info.map((item, index) => (
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



export default CulturalInfo;
