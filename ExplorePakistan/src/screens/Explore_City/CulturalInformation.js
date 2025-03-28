import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Explore_City_Style';

const Cultural_Information = [
    {
        title: 'Local Festival',
        details: [
            {label:"Spring Festival", value:"1850"},
            {label: 'Founders', value: 'Local tribal leaders' },
            {label: 'Historical Events', value: "Timergara played a key role in regional trade and political shifts."},
            {label:"Cultural Significance", value:"A historic trade center of Dir region",},
            {label: 'Monuments or Landmarks', value: 'Indo-Aryan burial sites, Balambat excavation site' },
            {label: 'Ethnic Background', value: "Primarily Pashtun"},
            {label: 'Famous Persons', value: "Local tribal leaders, notable scholars from the region"},
            {label: 'Historic Sites Nearby', value: "Balambat ruins, Indo-Aryan excavation sites"},
            {label: 'Development Over Time', value: "Evolved from a historical settlement to a modern urban hub"},
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
                    
                    <View style = {{marginBottom:60}}>
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
