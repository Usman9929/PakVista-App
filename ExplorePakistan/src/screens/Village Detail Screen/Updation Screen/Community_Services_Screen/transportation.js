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

const Transportation = () => {
  const navigation = useNavigation();

  // Updated state with relevant variable names
  const [buses, setBuses] = useState('');
  const [rickshaw, setRickshaw] = useState('');
  const [bikes, setBikes] = useState('');
  const [suzuki, setSuzuki] = useState('');
  const [majorRoads, setMajorRoads] = useState('');

  const handleSubmit = () => {
    if (
      !buses.trim() &&
      !rickshaw.trim() &&
      !bikes.trim() &&
      !suzuki.trim() &&
      !majorRoads.trim()
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
        <Text style={styles.header}>Transportation</Text>

        <Text style={styles.label}>Buses:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention availability, timings, or bus stations"
          placeholderTextColor="#888"
          value={buses}
          onChangeText={setBuses}
        />

        <Text style={styles.label}>Rickshaw:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention availability of rickshaws and key stands"
          placeholderTextColor="#888"
          value={rickshaw}
          onChangeText={setRickshaw}
        />

        <Text style={styles.label}>Bikes:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe bike rentals or bike taxi services"
          placeholderTextColor="#888"
          value={bikes}
          onChangeText={setBikes}
        />

        <Text style={styles.label}>Suzuki (Pickups/Shared Vans):</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention usage of Suzuki vans for local transport"
          placeholderTextColor="#888"
          value={suzuki}
          onChangeText={setSuzuki}
        />

        <Text style={styles.label}>Major Roads and Routes:</Text>
        <TextInput
          style={styles.input}
          placeholder="List main roads or highways passing through the area"
          placeholderTextColor="#888"
          value={majorRoads}
          onChangeText={setMajorRoads}
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

export default Transportation;
