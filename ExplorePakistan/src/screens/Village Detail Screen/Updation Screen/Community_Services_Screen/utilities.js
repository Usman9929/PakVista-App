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

const Utilities = () => {
  const navigation = useNavigation();

  // State for each utility input
  const [waterSupply, setWaterSupply] = useState('');
  const [electricity, setElectricity] = useState('');
  const [gasSupply, setGasSupply] = useState('');
  const [petrolPump, setPetrolPump] = useState('');
  const [internetServices, setInternetServices] = useState('');
  const [network, setNetwork] = useState('');

  const handleSubmit = () => {
    if (
      !waterSupply.trim() &&
      !electricity.trim() &&
      !gasSupply.trim() &&
      !petrolPump.trim() &&
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
        <Text style={styles.header}>Utilities</Text>

        <Text style={styles.label}>Water Supply:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention availability, sources, and timings"
          placeholderTextColor="#888"
          value={waterSupply}
          onChangeText={setWaterSupply}
        />

        <Text style={styles.label}>Electricity:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention availability and load shedding schedule"
          placeholderTextColor="#888"
          value={electricity}
          onChangeText={setElectricity}
        />

        <Text style={styles.label}>Gas Supply:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention pipeline gas availability or cylinder usage"
          placeholderTextColor="#888"
          value={gasSupply}
          onChangeText={setGasSupply}
        />

        <Text style={styles.label}>Petrol Pump:</Text>
        <TextInput
          style={styles.input}
          placeholder="List nearby petrol stations with name or location"
          placeholderTextColor="#888"
          value={petrolPump}
          onChangeText={setPetrolPump}
        />

        <Text style={styles.label}>Internet Services:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention available providers and speed quality"
          placeholderTextColor="#888"
          value={internetServices}
          onChangeText={setInternetServices}
        />

        <Text style={styles.label}>Mobile Network Coverage:</Text>
        <TextInput
          style={styles.input}
          placeholder="List mobile networks with strong/weak signals"
          placeholderTextColor="#888"
          value={network}
          onChangeText={setNetwork}
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

export default Utilities;
