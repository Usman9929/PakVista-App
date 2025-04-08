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
import styles from './Community_Services_Screen_style';

const HealthCare = () => {
  const navigation = useNavigation();

  // State for input fields
  const [clinic, setClinic] = useState('');
  const [hospital, setHospital] = useState('');
  const [pharmacy, setPharmacy] = useState('');
  const [mobileHealth, setMobileHealth] = useState('');

  const handleSubmit = () => {
    if (
      !clinic.trim() &&
      !hospital.trim() &&
      !pharmacy.trim() &&
      !mobileHealth.trim()
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
        <Text style={styles.header}>Healthcare Services</Text>

        <Text style={styles.label}>Clinic Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the name of the clinic providing healthcare services"
          placeholderTextColor="#888"
          value={clinic}
          onChangeText={setClinic}
        />

        <Text style={styles.label}>Hospital Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the name of the hospital offering medical care"
          placeholderTextColor="#888"
          value={hospital}
          onChangeText={setHospital}
        />

        <Text style={styles.label}>Pharmacy Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the name of the pharmacy providing medication"
          placeholderTextColor="#888"
          value={pharmacy}
          onChangeText={setPharmacy}
        />

        <Text style={styles.label}>Mobile Health Services:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter details about available mobile health services"
          placeholderTextColor="#888"
          value={mobileHealth}
          onChangeText={setMobileHealth}
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



export default HealthCare;
