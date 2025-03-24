import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Region_Events_Screens_Style';

const National_Observances= [
    {
        title: 'Pakistan Day (23rd March) :',
        details: [
            { label: 'Significance ', value: 'Pakistan Day commemorates the adoption of the Lahore Resolution on 23rd March 1940, which called for the creation of an independent state for Muslims in British India. This day is also associated with the proclamation of the first constitution of Pakistan in 1956, making it the Islamic Republic of Pakistan. ' },
            { label: 'Celebrations ', value: "\n \t \t ✔  A grand military parade is held in Islamabad, showcasing Pakistan’s military strength, equipment, and cultural diversity. \n \n \t  ✔  Cultural events and exhibitions highlight the country's heritage and unity. \n \n \t  ✔  Flag-hoisting ceremonies take place across the country, including schools and government offices. \n \n \t \t ✔  The President and Prime Minister address the nation, reflecting on Pakistan’s progress and challenges."},
        ]
    },
    {
        title: 'Independence Day (14th August) :',
        details: [
            { label: 'Significance ', value: ' \nIndependence Day celebrates Pakistan’s independence from British rule on 14th August 1947. It marks the creation of a separate homeland for Muslims of the Indian subcontinent under the leadership of Muhammad Ali Jinnah.' },
            { label: 'Celebrations ', value: ' \n ✔ Flag-hoisting ceremonies are held nationwide, with the largest at the Islamabad Parliament. \n \n ✔ Streets, homes, and landmarks are decorated with green and white lights, flags, and banners.\n \n ✔ Parades and fireworks take place in major cities.\n \n ✔ Speeches, patriotic songs, and special prayers are offered for the prosperity of Pakistan.' },
        ]
    }
];

const  NationalObservances = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header Image */}
                <ImageBackground source={require('../.././assets/images/timergaraImage_1.jpg')}
                    style={styles.headerImage}
                />

                {/* Emergency Contacts Section */}
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>National Observances</Text>
                    
                    <View style = {{marginBottom:60}}>
                    {National_Observances.map((item, index) => (
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


export default NationalObservances;
