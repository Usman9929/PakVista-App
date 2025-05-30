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

const LanguageSpoken = () => {
    const navigation = useNavigation();

    const [primaryLanguage, setPrimaryLanguage] = useState('');
    const [secondaryLanguage, setSecondaryLanguage] = useState('');
    const [additionalLanguage, setAdditionalLanguage] = useState('');

    const handleSubmit = () => {
        if (
            !primaryLanguage.trim() &&
            !secondaryLanguage.trim() &&
            !additionalLanguage.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Language data submitted successfully!", [
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
                <Text style={styles.header}>Language Spoken</Text>

                <Text style={styles.label}>Primary Language</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the primary language spoken in the area"
                    placeholderTextColor="#888"
                    value={primaryLanguage}
                    onChangeText={setPrimaryLanguage}
                />

                <Text style={styles.label}>Secondary Language</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter any secondary language commonly used"
                    placeholderTextColor="#888"
                    value={secondaryLanguage}
                    onChangeText={setSecondaryLanguage}
                />

                <Text style={styles.label}>Additional Language(s)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter other languages spoken, if any"
                    placeholderTextColor="#888"
                    value={additionalLanguage}
                    onChangeText={setAdditionalLanguage}
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

export default LanguageSpoken;
