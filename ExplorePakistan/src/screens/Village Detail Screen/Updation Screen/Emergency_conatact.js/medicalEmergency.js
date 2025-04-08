import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../Community_Services_Screen/Community_Services_Screen_style';

const MedicalEmergency = () => {
    const navigation = useNavigation();

    const [ambulanceService, setAmbulanceService] = useState('');
    const [emergencyNumber, setEmergencyNumber] = useState('');
    const [bloodBank, setBloodBank] = useState('');
    const [disasterManagement, setDisasterManagement] = useState('');
    const [floodContact, setFloodContact] = useState('');
    const [earthquakeContact, setEarthquakeContact] = useState('');

    const handleSubmit = () => {
        if (
            !ambulanceService.trim() &&
            !emergencyNumber.trim() &&
            !bloodBank.trim() &&
            !disasterManagement.trim() &&
            !floodContact.trim() &&
            !earthquakeContact.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Your data has been submitted successfully!", [
            { text: "OK", onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require("../../../../assets/images/timergaraImage_1.jpg")}
                style={styles.image}
            />

            <View style={styles.formContainer}>
                <Text style={styles.header}>Medical Emergency</Text>

                <Text style={styles.label}>Ambulance Service:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter ambulance service contact details"
                    placeholderTextColor="#888"
                    value={ambulanceService}
                    onChangeText={setAmbulanceService}
                />

                <Text style={styles.label}>Hospital Emergency Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter emergency contact number of hospital"
                    placeholderTextColor="#888"
                    value={emergencyNumber}
                    onChangeText={setEmergencyNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Blood Bank:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Provide details about the nearest blood bank"
                    placeholderTextColor="#888"
                    value={bloodBank}
                    onChangeText={setBloodBank}
                />

                <Text style={styles.label}>Disaster Management Contact:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter contact info for disaster response"
                    placeholderTextColor="#888"
                    value={disasterManagement}
                    onChangeText={setDisasterManagement}
                />

                <Text style={styles.label}>Flood Emergency Contact:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter contact details for flood-related help"
                    placeholderTextColor="#888"
                    value={floodContact}
                    onChangeText={setFloodContact}
                />

                <Text style={styles.label}>Earthquake Emergency Contact:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter contact details for earthquake-related help"
                    placeholderTextColor="#888"
                    value={earthquakeContact}
                    onChangeText={setEarthquakeContact}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <LinearGradient colors={['#ff7e5f', '#ff2d55']} style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MedicalEmergency;
