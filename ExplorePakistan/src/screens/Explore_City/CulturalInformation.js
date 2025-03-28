import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Explore_City_Style';

const Cultural_Information = [
  {
    title: 'Local Festival',
    details: [
      { label: "Spring Festival", value: "Jashn-e-Bahar" },
      { label: 'Harvest Festival', value: 'Spring Harvest Festival' },
      { label: 'Eid Celebrations"', value: "Grand communal feasts and cultural dances" },
    ],
  },
  {
    title: 'Traditions',
    details: [
      { label: "Traditional Dress", value: "Shalwar Kameez with embroidered waistcoats" },
      { label: "Hospitality", value: "Guests offered green tea and dried fruits" },
      { label: "Storytelling Evenings", value: "Folk tales and Pashto poetry sessions" },
      { label: "Wedding Ceremonies", value: "Traditional music and Attan dance performances" },
    ],
  },
  {
    title: 'Language_Spoken',
    details: [
      { label: "Primary Language", value: "Pashto" },
      { label: "Secondary Language", value: "Urdu" },
      { label: "Additional Languages", value: "English, Punjabi" }
    ]
  },
];

const CulturalInformation = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {/* Emergency Contacts Section */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Cultural Background</Text>

          <View style={{ marginBottom: 60 }}>
            {Cultural_Information.map((item, index) => (
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



export default CulturalInformation;
