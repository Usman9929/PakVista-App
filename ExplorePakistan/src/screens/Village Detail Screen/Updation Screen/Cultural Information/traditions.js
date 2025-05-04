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

const Traditions = () => {
    const navigation = useNavigation();

    const [traditionalDress, setTraditionalDress] = useState('');
    const [hospitality, setHospitality] = useState('');
    const [storyTelling, setStoryTelling] = useState('');
    const [weddingCeremony, setWeddingCeremony] = useState('');

    const handleSubmit = () => {
        if (
            !traditionalDress.trim() &&
            !hospitality.trim() &&
            !storyTelling.trim() &&
            !weddingCeremony.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Traditions data submitted successfully!", [
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
                <Text style={styles.header}>Traditions</Text>

                <Text style={styles.label}>Traditional Dress</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe traditional clothing worn by locals"
                    placeholderTextColor="#888"
                    value={traditionalDress}
                    onChangeText={setTraditionalDress}
                />

                <Text style={styles.label}>Hospitality</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe hospitality customs in the community"
                    placeholderTextColor="#888"
                    value={hospitality}
                    onChangeText={setHospitality}
                />

                <Text style={styles.label}>Storytelling Evenings</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe local storytelling traditions"
                    placeholderTextColor="#888"
                    value={storyTelling}
                    onChangeText={setStoryTelling}
                />

                <Text style={styles.label}>Wedding Ceremonies</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe wedding customs and rituals"
                    placeholderTextColor="#888"
                    value={weddingCeremony}
                    onChangeText={setWeddingCeremony}
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

export default Traditions;
