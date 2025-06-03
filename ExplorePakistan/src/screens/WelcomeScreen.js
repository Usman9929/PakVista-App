import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedCityData, setSelectedCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Axios version of API fetch
  const getCityData = async () => {
    const url = "http://192.168.43.98:3000/cities"; // Use DRF API route
    try {
      const response = await axios.get(url); // Axios GET
      console.log("Fetched city data:", response.data);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching city data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCityData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city.City_name);
    setSelectedCityData(city);
    setModalVisible(false);
  };

  const handleGuestClick = () => {
    if (selectedCity === "Select City") {
      Alert.alert("Select City", "Please select a city before proceeding as a guest.");
    } else {
      navigation.navigate('MainTabs', {
        screen: 'Regional Insight',
        params: {
          screen: 'RegionalInsight',
          params: { cityData: selectedCityData }
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to </Text>
        <Text style={styles.nametitle}>Explore Pakistan!</Text>
        <Text style={styles.description}>
          Explore the heart of our cities and villages through a seamless experience. Discover essential information, tourist attractions, community services, and local updates at your fingertips. Whether you're a resident or a visitor, our app connects you with everything you need to know about the community. Start your journey to uncover the rich culture, history, and natural beauty of the region!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>{selectedCity}</Text>
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: "red" }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ padding: 5 }}>or use as</Text>
          <TouchableOpacity onPress={handleGuestClick}>
            <Text style={{ color: "red" }}>Guest</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} visible={modalVisible} animationType="slide">
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalBox}>
              <Text style={styles.title}>Select Your City</Text>
              {cities.map((city, index) => (
                <TouchableOpacity
                  key={city.id || index}
                  onPress={() => handleSelectCity(city)}
                >
                  <Text style={styles.cityOption}>{city.City_name}</Text>
                </TouchableOpacity>
              ))}
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
