import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Region_Events_Screens_Style';

const Regional_Events_Ethnic_Festivals = [
    {
        title: 'Sindh Cultural Day :',
        details: [
            { label: 'Overview ', value: 'This day celebrates the rich cultural heritage of Sindh. It is prominently recognized for showcasing the Ajrak (block-printed shawls) and Sindhi topi (traditional hat) as symbols of Sindhi identity.' },
            { label: 'Activities ', value: " \n \t \t Cultural processions and gatherings.\n \t \t Traditional Sindhi music performances.\n \t \t Ajrak and topi distribution among participants. "},
            { label: 'Significance ', value: ' It promotes Sindhi heritage and fosters unity among Sindhis across the province and beyond.' }
        ]
    },
    {
        title: 'Lok Virsa Mela (Islamabad) :',
        details: [
            { label: 'Overview ', value: ' Held at the Lok Virsa Museum, this festival celebrates Pakistan is folk traditions, crafts, and culture.' },
            { label: 'Activities ', value: '\n \t \t Live folk music and dance performances. \n \t \t Exhibition of regional crafts and handicrafts. \n \t \t Cultural pavilions representing all provinces and territories.' },
            { label: 'Significance ', value: ' It provides a platform for artisans and folk artists to showcase their talent while preserving the diverse cultural heritage of Pakistan.' }
        ]
    }
];

const RegionalEventsEthnicFestivals = () => {
    const renderItem = ({ item }) => (
        <View style={styles.cardWrapper}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.details.map((detail, index) => (
                    <Text key={index} style={styles.cardText}>
                        <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                    </Text>
                ))}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {/* Header Image */}
            <ImageBackground source={require('../.././assets/images/timergaraImage_1.jpg')}
                style={styles.headerImage}
            />

            {/* Emergency Contacts Section */}
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Cultural and Seasonal Festials</Text>
                <FlatList
                    data={Regional_Events_Ethnic_Festivals}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContainer}
                    nestedScrollEnabled={true} // Add this line
                />
            </View>
        </View>
        </ScrollView>
    );
};


export default RegionalEventsEthnicFestivals;
