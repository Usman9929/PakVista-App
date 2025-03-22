import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const emergencyContacts = [
    {
        title: 'Police Station:',
        details: [
            { label: 'Contact Number', value: '0945-123456' },
            { label: 'Address', value: 'Main Police Station, Timergara' },
            { label: 'Operating Hours', value: '24/7' }
        ]
    },
    {
        title: 'Healthcare Services:',
        details: [
            { label: 'Contact Number', value: '0945-654321' },
            { label: 'Address', value: 'Fire Brigade Center, Timergara City' },
            { label: 'Operating Hours', value: '24/7' }
        ]
    },
    {
        title: 'Medical Emergency:',
        details: [
            { label: 'Ambulance Service', value: '1122' },
            { label: 'Hospital Emergency Number', value: '0945-12233' },
            { label: 'Blood Bank', value: 'Timergara Central Blood Bank' },
            { label: 'Flood Emergency', value: '0945-334455' },
            { label: 'Earthquake Emergency', value: '0945-223344' }
        ]
    }
];

const EmergencyContact = () => {
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
            <ImageBackground
                source={require('../assets/images/background.jpg')} // Replace with your actual image path
                style={styles.headerImage}
            />

            {/* Emergency Contacts Section */}
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Emergency Contact of Timergara</Text>
                <FlatList
                    data={emergencyContacts}
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
