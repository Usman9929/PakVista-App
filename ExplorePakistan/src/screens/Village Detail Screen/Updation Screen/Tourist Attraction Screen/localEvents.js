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

const LocalEvents = () => {
  const navigation = useNavigation();

  const [festivals, setFestivals] = useState('');
  const [exhibitions, setExhibitions] = useState('');
  const [performances, setPerformances] = useState('');

  const handleSubmit = () => {
    if (
      !festivals.trim() &&
      !exhibitions.trim() &&
      !performances.trim()
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
        <Text style={styles.header}>Local Events</Text>

        <Text style={styles.label}>Festivals:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter details about local or traditional festivals"
          placeholderTextColor="#888"
          value={festivals}
          onChangeText={setFestivals}
        />

        <Text style={styles.label}>Exhibitions:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention exhibitions or local fairs held in the area"
          placeholderTextColor="#888"
          value={exhibitions}
          onChangeText={setExhibitions}
        />

        <Text style={styles.label}>Cultural Performances:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe cultural dances, music, or drama events"
          placeholderTextColor="#888"
          value={performances}
          onChangeText={setPerformances}
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

export default LocalEvents;
