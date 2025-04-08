import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './Community_Services_Screen_style';

const EducationAddButton = () => {
  const navigation = useNavigation();

  // State for input fields
  const [school, setSchool] = useState('');
  const [college, setCollege] = useState('');
  const [training, setTraining] = useState('');
  const [university, setUniversity] = useState('');

  const handleSubmit = () => {
    if (
      !school.trim() &&
      !college.trim() &&
      !training.trim() &&
      !university.trim()
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
        <Text style={styles.header}>Educational Services</Text>

        <Text style={styles.label}>School :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter school name"
          placeholderTextColor="#888"
          value={school}
          onChangeText={setSchool}
        />

        <Text style={styles.label}>College :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter college name"
          placeholderTextColor="#888"
          value={college}
          onChangeText={setCollege}
        />

        <Text style={styles.label}>Training Center :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter training center"
          placeholderTextColor="#888"
          value={training}
          onChangeText={setTraining}
        />

        <Text style={styles.label}>University Presence :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter university"
          placeholderTextColor="#888"
          value={university}
          onChangeText={setUniversity}
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


export default EducationAddButton;
