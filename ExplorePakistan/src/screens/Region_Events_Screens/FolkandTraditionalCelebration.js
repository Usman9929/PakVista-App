import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Region_Events_Screens_Style';

const Folk_and_Traditional_Celebration = [
    {
        title: 'Horse and Cattle shows :',
        details: [
            { label: 'Region ', value: 'Primarily Punjab, including cities like Lahore and Sahiwal.' },
            { label: 'Description ', value: " These events showcase the livestock culture and rural traditions of Pakistan. Farmers bring their best breeds of horses, camels, and cattle for exhibitions and competitions. Activities include horse dancing, cattle races, and tent pegging, accompanied by traditional music and food stalls. "},
            { label: 'Significance ', value: '  These shows highlight the agricultural backbone of Pakistan and celebrate rural life, attracting both locals and tourists. ' }
        ]
    },
    {
        title: 'Cholistan Jeep Rally :',
        details: [
            { label: 'Region ', value: ' Cholistan Desert, Punjab.' },
            { label: 'Description ', value: ' A thrilling desert jeep rally held annually, drawing local and international drivers to navigate challenging desert terrains. The event also includes cultural activities such as traditional dances, handicrafts exhibitions, and desert camping.' },
            { label: 'Significance ', value: ' This event promotes adventure tourism in Pakistan while preserving the cultural heritage of the Cholistan Desert.' }
        ]
    }
];

const FolkandTraditionalCelebration = () => {
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
                <Text style={styles.sectionTitle}>Folk and Traditional Celebrations</Text>
                <FlatList
                    data={Folk_and_Traditional_Celebration}
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


export default FolkandTraditionalCelebration;
