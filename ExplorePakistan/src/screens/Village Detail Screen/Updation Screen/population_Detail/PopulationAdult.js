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

const PopulationAdult = () => {
    const navigation = useNavigation();

    const [totalPopulation, setTotalPopulation] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [percentageOfPopulation, setPercentageOfPopulation] = useState('');

    const handleSubmit = () => {
        if (
            !totalPopulation.trim() &&
            !ageRange.trim() &&
            !percentageOfPopulation.trim()
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
                <Text style={styles.header}>Population Adult</Text>

                <Text style={styles.label}>Total Adult Population:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter total number of adults in the area"
                    placeholderTextColor="#888"
                    value={totalPopulation}
                    onChangeText={setTotalPopulation}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Age Range:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the age range (e.g., 60+ years)"
                    placeholderTextColor="#888"
                    value={ageRange}
                    onChangeText={setAgeRange}
                />

                <Text style={styles.label}>Percentage of Total Population:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the percentage of adults in the population"
                    placeholderTextColor="#888"
                    value={percentageOfPopulation}
                    onChangeText={setPercentageOfPopulation}
                    keyboardType="numeric"
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

export default PopulationAdult;
