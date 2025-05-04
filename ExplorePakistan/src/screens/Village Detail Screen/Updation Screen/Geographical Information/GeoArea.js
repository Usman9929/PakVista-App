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

const GeoArea = () => {
    const navigation = useNavigation();

    const [totalArea, setTotalArea] = useState('');
    const [topography, setTopography] = useState('');
    const [landUse, setLandUse] = useState('');

    const handleSubmit = () => {
        if (
            !totalArea.trim() &&
            !topography.trim() &&
            !landUse.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Your geo area data has been submitted successfully!", [
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
                <Text style={styles.header}>Geo Area</Text>

                <Text style={styles.label}>Total Area</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter total area (e.g., 5.6 sq km)"
                    placeholderTextColor="#888"
                    value={totalArea}
                    onChangeText={setTotalArea}
                    keyboardType="default"
                />

                <Text style={styles.label}>Topography</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe the topography (e.g., hilly, plain)"
                    placeholderTextColor="#888"
                    value={topography}
                    onChangeText={setTopography}
                    keyboardType="default"
                />

                <Text style={styles.label}>Land Use</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe land use (e.g., residential, agriculture)"
                    placeholderTextColor="#888"
                    value={landUse}
                    onChangeText={setLandUse}
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

export default GeoArea;
