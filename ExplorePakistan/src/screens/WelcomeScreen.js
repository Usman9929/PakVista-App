import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import styles from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState([]); // Store cities data
  const [selectedCity, setSelectedCity] = useState("Select City"); // Track selected city

  // Fetch city data from the API
  const getCityData = async () => {
    const url = "http://192.168.100.117:3000/cities"; // API URL
    try {
      let result = await fetch(url);
      result = await result.json();
      setCities(result); // Set cities data to state
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    getCityData(); // Fetch cities when the component mounts
  }, []);

  // Handle Guest button click
  const handleGuestClick = () => {
    if (selectedCity === "Select City") {
      Alert.alert("Select City", "Please select a city before proceeding as a guest.");
    } else {
      navigation.navigate('Main', { selectedCity });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />

      <Image
        source={require('../assets/images/background.jpg')} // Accessing the image
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to </Text>
        <Text style={styles.nametitle}>Explore Pakistan!</Text>
        <Text style={styles.description}>
          Explore the heart of our cities and villages through a seamless experience. Discover essential information, tourist attractions, community services, and local updates at your fingertips. Whether you're a resident or a visitor, our app connects you with everything you need to know about the community. Start your journey to uncover the rich culture, history, and natural beauty of the region!
        </Text>

        {/* Button with dynamic text */}
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>{selectedCity}</Text>
        </TouchableOpacity>

        {/* Navigate to Login Screen */}
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: "red" }}>Login</Text>
          </TouchableOpacity>

          <Text style={{ padding: 5 }}>or use as</Text>

          {/* Navigate to Guest Screen */}
          <TouchableOpacity onPress={handleGuestClick}>
            <Text style={{ color: "red" }}>Guest</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for City Selection */}
        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalBox}>
              <Text style={styles.title}>Select Your City</Text>

              {/* Map through cities array and display dynamically */}
              {cities.map((city) => (
                <TouchableOpacity
                  key={city.id}
                  onPress={() => {
                    setSelectedCity(city.city_name); // Update button text
                    setModalVisible(false); // Close modal
                  }}
                >
                  <Text style={styles.cityOption}>{city.city_name}</Text>
                </TouchableOpacity>
              ))}

              {/* Close Button */}
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'red', marginTop: 20 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default WelcomeScreen;
