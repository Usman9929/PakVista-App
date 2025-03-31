import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Significant_Peaple = [
  {
    title: 'Population Children',
    details: [
      { label: "total", value: 3200 },
      { label: "age_range", value: "0-14 years" },
      { label: "percentage_of_total_population", value: "30%" }
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
      {label:"Male", value: 5500},
      {label:"Female", value: 5200},
      {label:"Male To Female Ratio", value: "1.06:1"}
    ]
  },
];

const SignificantPeaple = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Significant Peaple</Text>

        <View style={{ marginBottom: 60 }}>
          {Significant_Peaple.map((item, index) => (
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



export default SignificantPeaple;
