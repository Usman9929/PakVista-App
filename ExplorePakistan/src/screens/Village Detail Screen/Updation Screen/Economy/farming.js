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

const Farming = () => {
    const navigation = useNavigation();

    const [majorCrops, setMajorCrops] = useState('');
    const [fruitCultivation, setFruitCultivation] = useState('');
    const [liveStock, setLiveStock] = useState('');
    const [farmingMethod, setFarmingMethod] = useState('');

    const handleSubmit = () => {
        if (
            !majorCrops.trim() &&
            !fruitCultivation.trim() &&
            !liveStock.trim() &&
            !farmingMethod.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Farming data submitted successfully!", [
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
                <Text style={styles.header}>Farming</Text>

                <Text style={styles.label}>Major Crops</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What are the main crops grown here?"
                    placeholderTextColor="#888"
                    value={majorCrops}
                    onChangeText={setMajorCrops}
                />

                <Text style={styles.label}>Fruit Cultivation</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Which fruits are commonly cultivated in this area?"
                    placeholderTextColor="#888"
                    value={fruitCultivation}
                    onChangeText={setFruitCultivation}
                />

                <Text style={styles.label}>Livestock</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What types of livestock are raised (e.g., cows, goats)?"
                    placeholderTextColor="#888"
                    value={liveStock}
                    onChangeText={setLiveStock}
                />

                <Text style={styles.label}>Farming Method</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What farming methods are used (e.g., organic, traditional)?"
                    placeholderTextColor="#888"
                    value={farmingMethod}
                    onChangeText={setFarmingMethod}
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

export default Farming;
