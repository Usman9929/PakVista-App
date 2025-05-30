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

const Cultural_LocalFestival = () => {
    const navigation = useNavigation();

    const [springFestival, setSpringFestival] = useState('');
    const [harvestFestival, setHarvestFestival] = useState('');
    const [eidCelebration, setEidCelebration] = useState('');

    const handleSubmit = () => {
        if (
            !springFestival.trim() &&
            !harvestFestival.trim() &&
            !eidCelebration.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Festival data submitted successfully!", [
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

                <Text style={styles.label}>Spring Festival</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe how the Spring Festival is celebrated"
                    placeholderTextColor="#888"
                    value={springFestival}
                    onChangeText={setSpringFestival}
                />

                <Text style={styles.label}>Harvest Festival</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Details about traditional harvest celebrations"
                    placeholderTextColor="#888"
                    value={harvestFestival}
                    onChangeText={setHarvestFestival}
                />

                <Text style={styles.label}>Eid Celebration(s)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe customs during Eid-ul-Fitr/Eid-ul-Adha"
                    placeholderTextColor="#888"
                    value={eidCelebration}
                    onChangeText={setEidCelebration}
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

export default Cultural_LocalFestival;
