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

const LocalInformation = () => {
    const navigation = useNavigation();

    const [coordinates, setCoordinates] = useState('');
    const [nearestLandmark, setNearestLandmark] = useState('');
    const [distanceFromCity, setDistanceFromCity] = useState('');

    const handleSubmit = () => {
        if (
            !coordinates.trim() &&
            !nearestLandmark.trim() &&
            !distanceFromCity.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Your local information has been submitted successfully!", [
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
                <Text style={styles.header}>Local Information</Text>

                <Text style={styles.label}>Coordinates</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter coordinates (e.g., 35.1234° N, 71.5432° E)"
                    placeholderTextColor="#888"
                    value={coordinates}
                    onChangeText={setCoordinates}
                />

                <Text style={styles.label}>Nearest Landmark</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter nearest landmark (e.g., Timergara Fort)"
                    placeholderTextColor="#888"
                    value={nearestLandmark}
                    onChangeText={setNearestLandmark}
                />

                <Text style={styles.label}>Distance From Major City</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter distance (e.g., 20 km from Peshawar)"
                    placeholderTextColor="#888"
                    value={distanceFromCity}
                    onChangeText={setDistanceFromCity}
                    keyboardType="default"
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

export default LocalInformation;
