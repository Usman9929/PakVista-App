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

const FireStation = () => {
  const navigation = useNavigation();

  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [operatingHour, setOperatingHour] = useState('');

  const handleSubmit = () => {
    if (
      !contactNumber.trim() &&
      !address.trim() &&
      !operatingHour.trim()
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
        <Text style={styles.header}>Fire Station</Text>

        <Text style={styles.label}>Contact Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the fire station's contact number"
          placeholderTextColor="#888"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the full address of the fire station"
          placeholderTextColor="#888"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Operating Hours:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the station's working hours (e.g., 24/7)"
          placeholderTextColor="#888"
          value={operatingHour}
          onChangeText={setOperatingHour}
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

export default FireStation;
