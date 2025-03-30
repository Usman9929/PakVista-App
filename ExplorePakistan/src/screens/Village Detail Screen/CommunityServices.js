import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Community_Services = [
  {
    title: 'Education:',
    details: [
      { label: "schools", value: "2 primary schools, 1 high school" },
      { label: "college", value: "1 government college" },
      { label: "Universities", value: "None" },
      { label: "Training Center", value: "Vocational training center for youth" }
    ]
  },
  {
    title: 'Health Care Facilities:',
    details: [
      { label: "Clinics", value: "2 small clinics" },
      { label: "Hospitals", value: "1 government hospital" },
      { label: "Pharmacies", value: "3 local pharmacies" },
      { label: "Mobile Health Services", value: "Occasional medical camps" }
    ]
  },
  {
    title: 'Market:',
    details: [
      { label: "Details Local Market", value: "Main bazaar with grocery, clothing, and hardware shops" },
      { label: "Availability Essential Goods", value: "Easily available in local markets" }
    ]
  },
  {
    title: 'Transportations:',
    details: [
      { label: "Buses", value: "Available for intercity travel" },
      { label: "Rickshaw", value: "Common for short distances" },
      { label: "Bikes", value: "Widely used by locals" },
      { label: "Suzuki", value: "Used for goods and passenger transport" },
      { label: "Major Road", value: "Connected to main city roads" }
    ]
  },
  {
    title: 'Utilities:',
    details: [
      { label: "Water Supply", value: "Tube wells and municipal supply" },
      { label: "Electricity", value: "Available with occasional power outages" },
      { label: "Gas Supply", value: "Limited; mostly LPG cylinders used" },
      { label: "Petrol Pump", value: "1 petrol station" },
      { label: "Internet Services", value: "4G coverage available" },
      { label: "Network", value: "All major mobile networks available" }
    ]
  },
  {
    title: 'Recreational Facilities:',
    details: [
      {label:"Parks", value: "1 small park"},
      {label:"Playground", value: "Football and cricket ground"},
      {label:"Community Center", value: "Multipurpose hall for events"},
      {label:"Sports Facilities", value: "Local cricket and football clubs"}
    ]
  }
];

const CommunityServices = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Community Services</Text>

        <View style={{ marginBottom: 60 }}>
          {Community_Services.map((item, index) => (
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



export default CommunityServices;
