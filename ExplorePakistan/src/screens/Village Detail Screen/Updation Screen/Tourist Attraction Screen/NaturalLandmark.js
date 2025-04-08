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

const NaturalLandmark = () => {
  const navigation = useNavigation();

  // State for input fields
  const [rivers, setRivers] = useState('');
  const [lakes, setLakes] = useState('');
  const [mountains, setMountains] = useState('');
  const [forests, setForests] = useState('');

  const handleSubmit = () => {
    if (
      !rivers.trim() &&
      !lakes.trim() &&
      !mountains.trim() &&
      !forests.trim()
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
      {/* Display Image at the Top */}
      <Image
        source={require("../../../../assets/images/timergaraImage_1.jpg")}
        style={styles.image}
      />

      {/* Form Box Below the Image */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Natural Landmarks</Text>

        <Text style={styles.label}>Rivers:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter names or details about rivers in the area"
          placeholderTextColor="#888"
          value={rivers}
          onChangeText={setRivers}
        />

        <Text style={styles.label}>Lakes:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter names or descriptions of local lakes"
          placeholderTextColor="#888"
          value={lakes}
          onChangeText={setLakes}
        />

        <Text style={styles.label}>Mountains:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention any mountains or hills nearby"
          placeholderTextColor="#888"
          value={mountains}
          onChangeText={setMountains}
        />

        <Text style={styles.label}>Forests:</Text>
        <TextInput
          style={styles.input}
          placeholder="Provide details about nearby forests or greenery"
          placeholderTextColor="#888"
          value={forests}
          onChangeText={setForests}
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

export default NaturalLandmark;
