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

const CulturalandHistorical = () => {
  const navigation = useNavigation();

  const [temples, setTemples] = useState('');
  const [oldBuildings, setOldBuildings] = useState('');
  const [monuments, setMonuments] = useState('');
  const [museums, setMuseums] = useState('');

  const handleSubmit = () => {
    if (
      !temples.trim() &&
      !oldBuildings.trim() &&
      !monuments.trim() &&
      !museums.trim()
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
        <Text style={styles.header}>Cultural and Historical Places</Text>

        <Text style={styles.label}>Temples:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter names or details of temples (if any)"
          placeholderTextColor="#888"
          value={temples}
          onChangeText={setTemples}
        />

        <Text style={styles.label}>Old Buildings:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter historical or colonial building names"
          placeholderTextColor="#888"
          value={oldBuildings}
          onChangeText={setOldBuildings}
        />

        <Text style={styles.label}>Monuments:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention any local or national monuments"
          placeholderTextColor="#888"
          value={monuments}
          onChangeText={setMonuments}
        />

        <Text style={styles.label}>Museums:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe museums or cultural centers"
          placeholderTextColor="#888"
          value={museums}
          onChangeText={setMuseums}
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

export default CulturalandHistorical;
