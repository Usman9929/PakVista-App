import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Explore_City_Style';

const economy = [
  {
            title: 'Farming', 
            details: [
                {label:"Major Crops", value: "Wheat, Maize, Sugarcane"},
                {label:"Fruit Cultivation", value: "Apples, Oranges, Peaches"},
                {label:"Live Stock", value: "Cattle, Goats, Sheep"},
                {label:"Methods Used", value: "Traditional and modern farming techniques"}
            ]
            },
            {
             title: 'Handicrafts',
             details: [
                {label:"Popular Crafts", value: "Wood carving, Embroidery, Pottery"},
                {label:"Specialty Items", value: "Traditional Pashtun embroidery, Handwoven carpets"},
                {label:"Community Involvement", value: "Women-led embroidery businesses"}
             ]
          },
          {
            title: 'Industries' ,
            details: [
                {label:"Local Factories", value: "Flour mills, Textile factories"},
                {label:"Raw Material Sources", value: "Local agriculture, Imported textile materials"},
                {label:"Employment Contribution", value: "20% of local workforce"},
                {label:"Economic Impact", value: "Boosts local economy and trade"}
            ]
          }
];

const Economy = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {/* Emergency Contacts Section */}
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
      </View>
    </ScrollView>
  );
};



export default Economy;
