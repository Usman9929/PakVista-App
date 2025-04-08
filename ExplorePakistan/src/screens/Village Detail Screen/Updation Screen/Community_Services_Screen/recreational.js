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

const Recreational = () => {
  const navigation = useNavigation();

  // State for each recreational facility input
  const [parks, setParks] = useState('');
  const [playground, setPlayground] = useState('');
  const [communityCenter, setCommunityCenter] = useState('');
  const [sportsFacilities, setSportsFacilities] = useState('');
  const [internetServices, setInternetServices] = useState('');
  const [network, setNetwork] = useState('');

  const handleSubmit = () => {
    if (
      !parks.trim() &&
      !playground.trim() &&
      !communityCenter.trim() &&
      !sportsFacilities.trim() &&
      !internetServices.trim() &&
      !network.trim()
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
        <Text style={styles.header}>Recreational Facilities</Text>

        <Text style={styles.label}>Parks:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter park availability, location, and timings"
          placeholderTextColor="#888"
          value={parks}
          onChangeText={setParks}
        />

        <Text style={styles.label}>Playgrounds:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter playground location, accessibility, and timings"
          placeholderTextColor="#888"
          value={playground}
          onChangeText={setPlayground}
        />

        <Text style={styles.label}>Community Center:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter community center services, location, and timings"
          placeholderTextColor="#888"
          value={communityCenter}
          onChangeText={setCommunityCenter}
        />

        <Text style={styles.label}>Sports Facilities:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter available sports and facility timings"
          placeholderTextColor="#888"
          value={sportsFacilities}
          onChangeText={setSportsFacilities}
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

export default Recreational;
