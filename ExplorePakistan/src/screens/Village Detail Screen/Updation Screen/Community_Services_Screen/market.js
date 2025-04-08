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

const Market = () => {
  const navigation = useNavigation();

  // Updated state names to reflect Market-related inputs
  const [localMarketDetails, setLocalMarketDetails] = useState('');
  const [essentialGoodsAvailability, setEssentialGoodsAvailability] = useState('');

  const handleSubmit = () => {
    if (
      !localMarketDetails.trim() &&
      !essentialGoodsAvailability.trim()
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
        <Text style={styles.header}>Market</Text>

        <Text style={styles.label}>Details of Local Market:</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe the local market setup, types of shops, vendors, etc."
          placeholderTextColor="#888"
          value={localMarketDetails}
          onChangeText={setLocalMarketDetails}
        />

        <Text style={styles.label}>Availability of Essential Goods:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mention the availability of food, medicine, clothing, etc."
          placeholderTextColor="#888"
          value={essentialGoodsAvailability}
          onChangeText={setEssentialGoodsAvailability}
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

export default Market;
