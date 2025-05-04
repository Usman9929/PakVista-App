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

const LocalFestival = () => {
    const navigation = useNavigation();

    const [foundingYear, setFoundingYear] = useState('');
    const [founder, setFounder] = useState('');
    const [historicalEvents, setHistoricalEvents] = useState('');
    const [culturalSignificance, setCulturalSignificance] = useState('');
    const [monuments, setMonuments] = useState('');
    const [ethnicBackground, setEthnicBackground] = useState('');
    const [famousPerson, setFamousPerson] = useState('');
    const [historicSites, setHistoricSites] = useState('');
    const [developmentOverTime, setDevelopmentOverTime] = useState('');

    const handleSubmit = () => {
        if (
            !foundingYear.trim() &&
            !founder.trim() &&
            !historicalEvents.trim() &&
            !culturalSignificance.trim() &&
            !monuments.trim() &&
            !ethnicBackground.trim() &&
            !famousPerson.trim() &&
            !historicSites.trim() &&
            !developmentOverTime.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Local Festival data submitted successfully!", [
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
                <Text style={styles.header}>Local Festival</Text>

                <Text style={styles.label}>Founding Year</Text>
                <TextInput
                    style={styles.input}
                    placeholder="When was the festival first celebrated?"
                    placeholderTextColor="#888"
                    value={foundingYear}
                    onChangeText={setFoundingYear}
                />

                <Text style={styles.label}>Founder</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Who started this festival?"
                    placeholderTextColor="#888"
                    value={founder}
                    onChangeText={setFounder}
                />

                <Text style={styles.label}>Historical Events</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What historical events are associated with this festival?"
                    placeholderTextColor="#888"
                    value={historicalEvents}
                    onChangeText={setHistoricalEvents}
                />

                <Text style={styles.label}>Cultural Significance</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Why is this festival important culturally?"
                    placeholderTextColor="#888"
                    value={culturalSignificance}
                    onChangeText={setCulturalSignificance}
                />

                <Text style={styles.label}>Monuments or Landmarks</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Are there any special landmarks linked to this festival?"
                    placeholderTextColor="#888"
                    value={monuments}
                    onChangeText={setMonuments}
                />

                <Text style={styles.label}>Ethnic Background</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Which ethnic groups mainly celebrate this festival?"
                    placeholderTextColor="#888"
                    value={ethnicBackground}
                    onChangeText={setEthnicBackground}
                />

                <Text style={styles.label}>Famous Person</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Is there a famous person associated with this festival?"
                    placeholderTextColor="#888"
                    value={famousPerson}
                    onChangeText={setFamousPerson}
                />

                <Text style={styles.label}>Historic Sites Nearby</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Are there any historic sites close to where this festival is held?"
                    placeholderTextColor="#888"
                    value={historicSites}
                    onChangeText={setHistoricSites}
                />

                <Text style={styles.label}>Development Over Time</Text>
                <TextInput
                    style={styles.input}
                    placeholder="How has the festival changed over the years?"
                    placeholderTextColor="#888"
                    value={developmentOverTime}
                    onChangeText={setDevelopmentOverTime}
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

export default LocalFestival;
