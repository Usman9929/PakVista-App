import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Region_Events_Screens_Style';

const Cultural_and_Seasonal_Festival = [
    {
        title: 'Basant (Kite Flying Festival) :',
        details: [
            { label: 'Overview ', value: 'Basant marks the arrival of spring and is primarily celebrated in Punjab, particularly in Lahore. This festival is synonymous with kite flying competitions, where the sky is dotted with colorful kites. It is accompanied by music, dance, and traditional food.' },
            { label: 'Activities ', value: ' Families and friends gather on rooftops to fly kites, while others enjoy festive foods like samosas and jalebis. Night celebrations often include lighting lanterns and fireworks.' },
            { label: 'Significance ', value: ' Basant is not just a celebration of spring but also a cultural emblem of Punjab is heritage. Though its large-scale celebration has faced restrictions due to safety concerns, it remains an iconic part of Pakistan’s cultural identity.' }
        ]
    },
    {
        title: 'Shandur Polo Festival :',
        details: [
            { label: 'Overview ', value: ' Held at Shandur Pass in Gilgit-Baltistan, this festival takes place on the world’s highest polo ground, located at an altitude of 12,000 feet.' },
            { label: 'Activities ', value: 'The highlight is the polo matches between teams from Chitral and Gilgit, played in their traditional freestyle format. The event also features cultural performances, local music, camping, and trekking for visitors.' },
            { label: 'Significance ', value: ' The festival celebrates the local tradition of polo, while also promoting tourism and cultural exchange in the region.' }
        ]
    }
];

const CulturalandSeasonalFestival = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header Image */}
                <ImageBackground source={require('../.././assets/images/timergaraImage_1.jpg')}
                    style={styles.headerImage}
                />

                {/* Emergency Contacts Section */}
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Cultural and Seasonal Festivals</Text>
                    
                    <View style = {{marginBottom:60}}>
                    {Cultural_and_Seasonal_Festival.map((item, index) => (
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

export default CulturalandSeasonalFestival;
