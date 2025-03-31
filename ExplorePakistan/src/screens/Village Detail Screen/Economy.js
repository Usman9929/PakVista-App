import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const economy = [
  {
    title: 'Farming',
    details: [
      { label: "Major Crops", value: "Wheat, maize, vegetables" },
      { label: "Fruit Cultivation", value: "Apricots, peaches, walnuts" },
      { label: "Livestock", value: "Cattle, goats, poultry" },
      { label: "Method", value: "Traditional and tube well irrigation" }
    ]
  },
  {
    title: 'HandiCrafts',
    details: [
      { label: "Popular Crafts", value: "Embroidery, carpet weaving" },
      { label: "Specialty Items", value: "Woolen shawls, Pashtun caps" },
      { label: "Community Involvement", value: "Women and small artisans" }
    ]
  },
  {
    title: 'Industries',
    details: [
      {label:"Local Factories", value: "Flour mills, brick kilns"},
      {label:"Raw Material", value: "Wool, wood, clay"},
      {label:"Employment Contribution", value: "20% workforce"},
      {label:"Economic Impact", value: "Supports trade & income"}
    ]
  },
];

const GeographicalInfo = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Economy</Text>

        <View style={{ marginBottom: 60 }}>
          {economy.map((item, index) => (
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
