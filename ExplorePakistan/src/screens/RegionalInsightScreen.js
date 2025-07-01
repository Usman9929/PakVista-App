import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const headerImages = [
  require('../assets/images/timergaraImage_1.jpg'),
  require('../assets/images/timergaraImage_2.jpg'),
  require('../assets/images/timergaraImage_3.jpg'),
  require('../assets/images/timergaraImage_4.jpg'),
  require('../assets/images/timergaraImage_5.jpg'),
  require('../assets/images/timergaraImage_6.jpg'),
  require('../assets/images/timergaraImage_8.jpg'),
];

const RegionalInsightScreen = () => {
  const route = useRoute();
  const { cityData } = route.params;
  const navigation = useNavigation();

  const [allVillages, setAllVillages] = useState([]);
  const [loadingVillages, setLoadingVillages] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVillages = async () => {
    try {
      const response = await axios.get(`http://192.168.43.98:8000/village-profile/`, {
        params: {
          'village__city__id': cityData.City_id
        }
      });

      const approvedVillages = response.data.filter(village => village.is_approved);
      setAllVillages(approvedVillages);
    } catch (error) {
      console.error('Error fetching villages:', error.message);
    } finally {
      setLoadingVillages(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchVillages();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 3000);

    fetchVillages();
    return () => clearInterval(interval);
  }, [cityData.City_id]);

  const handleVillagePress = (village) => {
    navigation.navigate('VillageDetail', {
      villageData: village,
      cityName: cityData.City_name
    });
  };

  return (
    <ScrollView
      style={styles.guestcontainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {/* Header Image */}
      <Image source={headerImages[currentImageIndex]} style={styles.headerImage} />

      {/* About City */}
      <View style={styles.aboutSection}>
        <Text style={styles.guettitle}>About {cityData.City_name}</Text>
        <Text style={styles.guestdescription}>{cityData.City_description}</Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <GuestButton
          title="Explore Villages"
          icon={require('../assets/icons/explore.png')}
          onPress={() => navigation.navigate('ExploreVillageScreen', { cityId: cityData.City_id })}
        />
        <GuestButton
          title="Explore City"
          icon={require('../assets/icons/popular_site.png')}
          onPress={() => navigation.navigate('ExploreCity', { cityData })}
        />
        <GuestButton
          title="Region Events"
          icon={require('../assets/icons/reigon_event.png')}
          onPress={() => navigation.navigate('RegionEvents', { cityId: cityData.City_id })}
        />
        <GuestButton
          title="Search"
          icon={require('../assets/icons/search.png')}
          onPress={() => navigation.navigate('SearchScreen')}
        />
        <GuestButton
          title="Emergency Contacts"
          icon={require('../assets/icons/emergency.png')}
          onPress={() => navigation.navigate('EmergencyContact', { cityData })}
        />
        <GuestButton
          title="Login Sign-Up"
          icon={require('../assets/icons/login.png')}
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      {/* Villages Section */}
      <View style={styles.villageSection}>
        <Text style={styles.guettitle}>Villages in {cityData.City_name}</Text>

        {loadingVillages ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : allVillages.length > 0 ? (
          allVillages.map((village) => (
            <TouchableOpacity
              key={village.village_code}
              style={styles.touristItem}
              onPress={() => handleVillagePress(village)}
            >
              {village.Image && (
                <Image
                  source={{ uri: village.Image }}
                  style={styles.touristImage}
                  resizeMode="cover"
                />
              )}
              <View style={styles.touristTextContainer}>
                <Text style={styles.touristTitle}>{village.village_name}</Text>
                <Text style={styles.touristLocation}>
                  {village.city || cityData.City_name}
                </Text>
                {village.description && (
                  <Text style={styles.touristDescription}>
                    {village.description.length > 100
                      ? `${village.description.substring(0, 100)}...`
                      : village.description}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No villages found for this city</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const GuestButton = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.guestbutton} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.guestbuttonText}>{title}</Text>
  </TouchableOpacity>
);

export default RegionalInsightScreen;