import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Region_Events_Screens_Style';

const religious_festivals = [
    {
        title: 'Eid al-Fitr :',
        details: [
            { label: 'Description', value: 'Celebrates the end of Ramadan, the Islamic holy month of fasting. It begins with a special prayer called Salat al-Eid held in mosques or open areas, followed by a day of feasting, visiting relatives, and giving Zakat al-Fitr (charity) to the less fortunate.' },
            { label: 'Traditions: ', value: 'Families prepare special meals, wear new clothes, and exchange gifts. Sweets like Sheer Khurma are commonly served.' },
        ]
    },
    {
        title: 'Eid al-Adha :',
        details: [
            { label: 'Description', value: ' Also known as the Festival of Sacrifice, it honors Prophet Ibrahim’s willingness to sacrifice his son in obedience to Allah’s command.' },
            { label: 'Traditions', value: ' Muslims perform Qurbani (animal sacrifice), distribute the meat among family, neighbors, and the needy, and attend prayers at mosques. It is a time of reflection, charity, and family gatherings.' },
        ]
    },
    {
        title: 'Shab-e-Barat :',
        details: [
            { label: 'Description', value: 'Known as the Night of Forgiveness, it is believed that Allah determines destinies for the upcoming year and forgives sins on this night. It is observed on the 15th night of Sha’ban.' },
            { label: 'Traditions', value: 'Muslims pray, recite the Quran, seek forgiveness, and perform charitable acts. Some also visit graves to pray for deceased relatives.' },
        ]
    }
];

const ReligousFestivalScreen = () => {
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
                <Text style={styles.sectionTitle}>Religious Festivals</Text>
                <FlatList
                    data={religious_festivals}
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


export default ReligousFestivalScreen;
