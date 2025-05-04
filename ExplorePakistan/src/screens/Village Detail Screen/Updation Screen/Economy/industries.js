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

const Industries = () => {
    const navigation = useNavigation();

    const [localFactories, setLocalFactories] = useState('');
    const [rawMaterials, setRawMaterials] = useState('');
    const [employmentContribution, setEmploymentContribution] = useState('');
    const [economicImpact, setEconomicImpact] = useState('');

    const handleSubmit = () => {
        if (
            !localFactories.trim() &&
            !rawMaterials.trim() &&
            !employmentContribution.trim() &&
            !economicImpact.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Industry data submitted successfully!", [
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
                <Text style={styles.header}>Industries</Text>

                <Text style={styles.label}>Local Factories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What industries or factories operate in this area?"
                    placeholderTextColor="#888"
                    value={localFactories}
                    onChangeText={setLocalFactories}
                />

                <Text style={styles.label}>Raw Material</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What raw materials are used in local industries?"
                    placeholderTextColor="#888"
                    value={rawMaterials}
                    onChangeText={setRawMaterials}
                />

                <Text style={styles.label}>Employment Contribution</Text>
                <TextInput
                    style={styles.input}
                    placeholder="How do these industries contribute to local employment?"
                    placeholderTextColor="#888"
                    value={employmentContribution}
                    onChangeText={setEmploymentContribution}
                />

                <Text style={styles.label}>Economic Impact</Text>
                <TextInput
                    style={styles.input}
                    placeholder="How do industries affect the local economy?"
                    placeholderTextColor="#888"
                    value={economicImpact}
                    onChangeText={setEconomicImpact}
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

export default Industries;
