import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Explore_City_Style';

const Geographica_lInfo = [
    {
        title: 'Location Information',
        details: [
            {label:"Coordinates", value:"34.6167° N, 71.9722° E",},
            {label: 'Nearest_landmark', value: 'Balambat' },
            {label: 'Distance From Major City', value: "70 km from Mingora"},
        ]
    },
    {
      title: 'GeO Area',
      details: [
          {label:"Total Area", value:"31.1 sq km",},
          {label: 'Topography', value: 'Valley with mountainous surroundings' },
          {label: 'Land Use', value: "Agricultural 50%, Residential 35%, Commercial 15%"},
      ]
  },
  {
    title: 'Climate Detail',
    details: [
        {label:"Average Temperature", value:"22°C",},
        {label: 'Rainfall', value: '1000 mm annually' },
        {label: 'Seasonal Variations', value: "Cold winters, moderate summers, heavy monsoons"},
    ]
},
];

const GeographicalInfo = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                {/* Emergency Contacts Section */}
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Geographical Information </Text>
                    
                    <View style = {{marginBottom:60}}>
                    {Geographica_lInfo.map((item, index) => (
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



export default GeographicalInfo;
