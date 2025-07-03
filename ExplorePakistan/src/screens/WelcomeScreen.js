import React, { useEffect, useState, useContext } from 'react';
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
import { CityContext } from '../App'; // ✅ Import context

const WelcomeScreen = ({ setIsGuest }) => {
  const navigation = useNavigation();
  const { setCityData } = useContext(CityContext); // ✅ Access setCityData

  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedCityData, setSelectedCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all cities
  const getCityData = async () => {
    const url = "http://192.168.43.98:8000/cities";
    try {
      const response = await axios.get(url);
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

  const handleSelectCity = (city) => {
    setSelectedCity(city.City_name);
    setSelectedCityData(city);
    setModalVisible(false);
  };

  const handleGuestClick = () => {
    if (selectedCity === "Select City") {
      Alert.alert("Select City", "Please select a city before proceeding as a guest.");
    } else {
      setIsGuest(true); // ✅ Mark user as guest
      setCityData(selectedCityData); // ✅ Save city to context
      navigation.navigate('MainTabs');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.nametitle}>Explore Pakistan!</Text>
        <Text style={styles.description}>
          Explore cities and villages with real-time info. Discover community services, tourist attractions, and local culture. Start your journey today!
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

        {/* Modal for city selection */}
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
