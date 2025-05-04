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

const ClimateDetail = () => {
    const navigation = useNavigation();

    const [averageTemperature, setAverageTemperature] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [seasonalVariations, setSeasonalVariations] = useState('');

    const handleSubmit = () => {
        if (
            !averageTemperature.trim() &&
            !rainfall.trim() &&
            !seasonalVariations.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Your climate data has been submitted successfully!", [
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
                <Text style={styles.header}>Climate Detail</Text>

                <Text style={styles.label}>Average Temperature (°C)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter average temperature"
                    placeholderTextColor="#888"
                    value={averageTemperature}
                    onChangeText={setAverageTemperature}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Rainfall (mm)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter average rainfall"
                    placeholderTextColor="#888"
                    value={rainfall}
                    onChangeText={setRainfall}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Seasonal Variations</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe seasonal changes (e.g., cold winters, hot summers)"
                    placeholderTextColor="#888"
                    value={seasonalVariations}
                    onChangeText={setSeasonalVariations}
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

export default ClimateDetail;
