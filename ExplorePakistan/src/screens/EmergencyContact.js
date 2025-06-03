import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const mapEmergencyContacts = (data) => {
    if (!data) return [];

    return [
        {
            title: 'Police Station:',
            details: [
                { label: 'Contact Number', value: data.police_stations?.contact_number || 'N/A' },
                { label: 'address', value: data.police_stations?.address || 'N/A' },
                { label: 'Operating Hours', value: data.police_stations?.operating_hours_police_stations || 'N/A' },
            ],
        },
        {
            title: 'Fire Station:',
            details: [
                { label: 'Contact Number', value: data.fire_station?.contact_number || 'N/A' },
                { label: 'Address', value: data.fire_station?.address || 'N/A' },
                { label: 'Operating Hours', value: data.fire_station?.operating_hours || 'N/A' },
            ],
        },
        {
            title: 'Medical Emergency:',
            details: [
                { label: 'Ambulance Service', value: data.medical_emergency?.ambulance_service || 'N/A' },
                { label: 'Hospital Emergency Number', value: data.medical_emergency?.hospital_emergency_number || 'N/A' },
                { label: 'Blood Bank', value: data.medical_emergency?.blood_bank || 'N/A' },
                { label: 'Flood Emergency', value: data.medical_emergency?.disaster_management || 'N/A' },
                { label: 'Earthquake Emergency', value: data.medical_emergency?.contact_for_handling_flood || 'N/A' },
                { label: 'Earthquake Emergency', value: data.medical_emergency?.contact_for_earthquake || 'N/A' },
            ],
        },
    ];
};

const EmergencyContact = () => {
    const route = useRoute();
    const { cityData } = route.params;

    // Extract and map data
    const emergencyContacts = mapEmergencyContacts(cityData?.Emergency_Contacts);

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
                <ImageBackground
                    source={require('../assets/images/background.jpg')}
                    style={styles.headerImage}
                />
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Emergency Contact of {cityData.city_name}</Text>
                    <FlatList
                        data={emergencyContacts}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.listContainer}
                        nestedScrollEnabled={true}
                    />
                </View>
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    headerImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    },
    cardWrapper: {
        marginBottom: 15,
        borderRadius: 60,
        shadowColor: 'red',
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6, // Android shadow
        shadowOffset: { width: 0, height: 4 },
    },
    content: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -20,
        marginRight: 15,
        marginLeft: 15
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    listContainer: {
        paddingBottom: 80
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        overflow: 'hidden', // Prevents shadow bleeding inside
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9534f',
        marginBottom: 5
    },
    cardText: {
        fontSize: 14,
        marginBottom: 3
    },
    bold: {
        fontWeight: 'bold'
    },
    addButton: {
        backgroundColor: '#d9534f',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 10
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-around'
    },
    navButton: {
        alignItems: 'center'
    },
    navText: {
        fontSize: 12,
        color: '#888',
        marginTop: 3
    }
});

export default EmergencyContact;
