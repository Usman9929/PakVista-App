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

const HandiCrafts = () => {
    const navigation = useNavigation();

    const [popularCrafts, setPopularCrafts] = useState('');
    const [specialtyItems, setSpecialtyItems] = useState('');
    const [communityInvolvement, setCommunityInvolvement] = useState('');

    const handleSubmit = () => {
        if (
            !popularCrafts.trim() &&
            !specialtyItems.trim() &&
            !communityInvolvement.trim()
        ) {
            Alert.alert("Validation Error", "Please fill at least one field to submit.");
            return;
        }

        Alert.alert("Success", "Handicrafts data submitted successfully!", [
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
                <Text style={styles.header}>Handicrafts</Text>

                <Text style={styles.label}>Popular Crafts</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What traditional crafts are well-known in this area?"
                    placeholderTextColor="#888"
                    value={popularCrafts}
                    onChangeText={setPopularCrafts}
                />

                <Text style={styles.label}>Specialty Items</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Are there any unique handmade items or specialties?"
                    placeholderTextColor="#888"
                    value={specialtyItems}
                    onChangeText={setSpecialtyItems}
                />

                <Text style={styles.label}>Community Involvement</Text>
                <TextInput
                    style={styles.input}
                    placeholder="How is the local community involved in crafts?"
                    placeholderTextColor="#888"
                    value={communityInvolvement}
                    onChangeText={setCommunityInvolvement}
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

export default HandiCrafts;
