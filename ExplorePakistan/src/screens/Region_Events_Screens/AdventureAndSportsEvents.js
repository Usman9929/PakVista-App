import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Region_Events_Screens_Style';

const Adventure_And_Sports_Events = [
    {
        title: 'New Year Celebration :',
        details: [
            {  value: "New Year’s Eve in Pakistan has become an increasingly popular event, particularly in urban areas such as Karachi, Lahore, and Islamabad. Although not traditionally part of the cultural or religious fabric of Pakistan, the global influence of New Year celebrations has made it a festive occasion, particularly among the younger generation and in metropolitan regions."},
            {label:"Key Features"},
            { label: '✓ Fireworks Displays', value: '\n Major cities like Karachi and Lahore host grand fireworks at midnight to mark the start of the New Year. Popular venues include seafront areas in Karachi (e.g., Clifton Beach) and landmarks like Minar-e-Pakistan in Lahore.' },
            { label: '✓ Music Concerts and Events ', value: "\n Large-scale concerts featuring local and international artists are organized in cities to entertain the crowds. "},
            { label: '✓ Community Gatherings', value: '\n Friends and families gather in homes or public spaces to enjoy meals, countdowns, and music.' },
            { label: '✓ Safety Concerns', value: '\n Authorities often deploy security personnel to ensure the events remain peaceful, as large gatherings can sometimes lead to safety challenges.' }
        ]
    },
    {
        title: 'Christmas :',
        details: [
            { value: "Christmas is celebrated with great enthusiasm by the Christian community in Pakistan, making up approximately 1.5% of the population. The celebrations are an important reflection of religious diversity in the country."},
            {label:"Key Features"},
            {label: '✓ Church Services ', value: ' \n Special masses are held on Christmas Eve and Christmas Day in churches across Pakistan, including prominent ones like the Sacred Heart Cathedral in Lahore and St. Patrick is Cathedral in Karachi. Services include carol singing, prayer, and sermons.Decorations: Homes, churches, and streets are decorated with lights, Christmas trees, and nativity scenes. In some areas, bazaars and malls display festive decorations to create a joyous atmosphere.' },
            { label: '✓ Community Gatherings ', value: ' \n Many organizations and individuals participate in acts of kindness, distributing food and gifts to underprivileged communities' },
            { label: '✓ Charity and Outreach ', value: ' \n It provides a platform for artisans and folk artists to showcase their talent while preserving the diverse cultural heritage of Pakistan.' },
            { label: '✓ Cultural Adaptations ', value: ' \n While Christmas traditions like Santa Claus and Christmas trees are celebrated, there are also uniquely Pakistani elements, such as incorporating local foods and crafts into the celebrations.' }
        ]
    }
];

const AdventureAndSportsEvents = () => {
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
                <Text style={styles.sectionTitle}>Adventure and Sports Events</Text>
                <FlatList
                    data={Adventure_And_Sports_Events}
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


export default AdventureAndSportsEvents;
